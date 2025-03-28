import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyAuth } from '@/lib/auth'

export async function GET() {
  try {
    const blogs = await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(blogs)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blogs' }, 
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
    const blog = await prisma.blogPost.create({ data })
    return NextResponse.json(blog)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create blog' }, 
      { status: 500 }
    )
  }
}