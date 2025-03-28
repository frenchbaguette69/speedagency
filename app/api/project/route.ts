import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyAuth } from '@/lib/auth'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' }, 
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const isAuthorized = await verifyAuth(req)
    if (!isAuthorized) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      )
    }

    const data = await req.json()
    const project = await prisma.project.create({
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
      { error: 'Failed to create project' }, 
      { status: 500 }
    )
  }
}