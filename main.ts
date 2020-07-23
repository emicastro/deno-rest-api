import { App } from './deps.ts'
import { api } from './api.ts'

const app = new App()

app.use('/api', api)

app.listen({ port: 3000 })
console.log('Server running on http://localhost:3000')
