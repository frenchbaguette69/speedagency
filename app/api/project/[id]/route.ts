import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyAuth } from '@/lib/auth'

export async function GET(
  req: Request, 
  { params }: { params: { id: string } }
) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: params.id }
    })
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' }, 
        { status: 404 }
      )
    }
    
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch project' }, 
      { status: 500 }
    )
  }
}

export async function PUT(
  req: Request, 
  { params }: { params: { id: string } }
) {
  try {
    const isAuthorized = await verifyAuth(req)
    if (!isAuthorized) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      )
    }

    const data = await req.json()
    const project = await prisma.project.update({
      where: { id: params.id },
      data: {
        ...data,
        technologies: Array.isArray(data.technologies) 
          ? data.technologies 
          : data.technologies.split(',').map((t: string) => t.trim())
      }
    })
    
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update project' }, 
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: Request, 
  { params }: { params: { id: string } }
) {
  try {
    const isAuthorized = await verifyAuth(req)
    if (!isAuthorized) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      )
    }

    await prisma.project.delete({
      where: { id: params.id }
    })
    
    return NextResponse.json({
      message: 'Project deleted successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete project' }, 
      { status: 500 }
    )
  }
}import crypto from 'crypto'

/**
 * Generates a cryptographically secure random string
 * @param length Length of the key to generate (default: 32)
 * @returns A hexadecimal string of the specified length
 */
function generateSecureKey(length: number = 32): string {
  return crypto.randomBytes(length).toString('hex')
}

// Generate and display JWT secret
const jwtSecret = generateSecureKey(32)
console.log('\n=== GENERATED SECURITY KEYS ===')
console.log('JWT_SECRET="' + jwtSecret + '"')

// Generate and display admin setup key
const adminSetupKey = generateSecureKey(32)
console.log('ADMIN_SETUP_KEY="' + adminSetupKey + '"')

// Generate and display next auth secret
const nextAuthSecret = generateSecureKey(32)
console.log('NEXTAUTH_SECRET="' + nextAuthSecret + '"')

console.log('\nAdd these keys to your .env file')
console.log('Keep these keys secure and never commit them to version control\n')