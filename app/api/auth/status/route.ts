import { NextResponse } from 'next/server'
import { verifyAuth } from '@/lib/auth'

export async function GET(req: Request) {
  try {
    const isAuthenticated = await verifyAuth(req)
    
    return NextResponse.json({
      authenticated: isAuthenticated
    })
  } catch (error) {
    return NextResponse.json({
      authenticated: false
    })
  }
}