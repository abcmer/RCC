require('dotenv').config()

const config = {
  'backendApiHost': process.env.BACKEND_API_HOST || 'http://localhost:5000'
}
console.log(config)

export default config