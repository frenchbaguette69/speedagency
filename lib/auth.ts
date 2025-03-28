import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'

export async function verifyAuth(req: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  if (!token) {
    return false
  }

  try {
    const { payload } = await jwtVerify(
      token.value,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )
    return !!payload
  } catch (error) {
    return false
  }
}