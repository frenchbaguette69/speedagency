import crypto from 'crypto'

const generateSecureKey = (length: number = 32) => {
  return crypto.randomBytes(length).toString('hex')
}

console.log('\nGenerated Setup Keys:')
console.log('---------------------')
console.log('ADMIN_SETUP_KEY:', generateSecureKey(32))
console.log('JWT_SECRET:', generateSecureKey(32))
console.log('\nAdd these to your .env file\n')