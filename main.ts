import { App } from './deps.ts'

const app = new App()

app.listen({ port: 3000 })
console.log('Server running on http://localhost:3000')
