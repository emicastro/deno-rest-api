import { Router, Request, Response } from './deps.ts'

const api = new Router()

api.get('/', (req: Request, res: Response) => {
  res.status(200).send({ status: 'Deno running!' })
})

api.get('/:id', (req: Request, res: Response) => {
  res.status(200).send({ params: req.params.id })
})

export { api }
