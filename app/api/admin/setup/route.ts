import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma, PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { z } from 'zod'

const setupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'Password must contain uppercase, lowercase, number, and special character'
  ),
  setupKey: z.string().min(32)
})

type SetupRequest = z.infer<typeof setupSchema>

export async function POST(req: Request) {
  try {
    // Check if setup is already completed
    const setupFlag = await prisma.systemFlag.findUnique({
      where: { key: 'ADMIN_SETUP_COMPLETE' }
    })

    if (setupFlag?.value === true) {
      return NextResponse.json(
        { error: 'Admin setup already completed' },
        { status: 403 }
      )
    }

    const body = await req.json()
    const validation = setupSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validation.error.issues 
        },
        { status: 400 }
      )
    }

    const { email, password, setupKey }: SetupRequest = body

    if (setupKey !== process.env.ADMIN_SETUP_KEY) {
      return NextResponse.json(
        { error: 'Invalid setup key' },
        { status: 401 }
      )
    }

    const existingAdmin = await prisma.admin.findUnique({
      where: { email }
    })

    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Email already in use' },
        { status: 409 }
      )
    }

    const result = await prisma.$transaction(async (tx: any) => {
      const hashedPassword = await bcrypt.hash(password, 12)

      const admin = await tx.admin.create({
        data: {
          email,
          password: hashedPassword
        },
        select: {
          id: true,
          email: true,
          createdAt: true
        }
      })

      await tx.systemFlag.upsert({
        where: { key: 'ADMIN_SETUP_COMPLETE' },
        update: { value: true },
        create: {
          key: 'ADMIN_SETUP_COMPLETE',
          value: true
        }
      })

      return admin
    })

    return NextResponse.json({
      message: 'Admin setup completed successfully',
      admin: result
    })

  } catch (error) {
    console.error('Setup error:', error)

    if (error instanceof Error) {
      const prismaError = error as any;
      if (prismaError.code === 'P2002') {
        return NextResponse.json(
          { error: 'Email already exists' },
          { status: 409 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to complete setup' },
      { status: 500 }
    )
  }
}