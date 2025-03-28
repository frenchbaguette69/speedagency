import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyAuth } from '@/lib/auth'

export async function GET(
  req: Request, 
  { params }: { params: { id: string } }
) {
  try {
    const blog = await prisma.blogPost.findUnique({
      where: { id: params.id }
    })
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' }, 
        { status: 404 }
      )
    }
    
    return NextResponse.json(blog)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog' }, 
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
    const blog = await prisma.blogPost.update({
      where: { id: params.id },
      data: {
        ...data,
        seoModifiedAt: new Date()
      }
    })
    
    return NextResponse.json(blog)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update blog' }, 
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

    await prisma.blogPost.delete({
      where: { id: params.id }
    })
    
    return NextResponse.json({
      message: 'Blog deleted successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete blog' }, 
      { status: 500 }
    )
  }
}