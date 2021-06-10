import Koa from "koa"
import Router from "koa-router"
import { config } from "dotenv"


const main = async () => {
  config()
  const app = new Koa()
  const indexRouter = new Router()
  const PORT = process.env.PORT || 5000

  indexRouter.get('/', async ctx => {
    ctx.body = "Hello World"
  })
  app.use(indexRouter.routes())

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

main().catch(err => console.error("Error:", err))