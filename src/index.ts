import Koa from 'koa';
import body from 'koa-bodyparser'
import indexRouter from './routers/index';
import { config } from 'dotenv';



config();
const app = new Koa();
app.use(body)

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const PORT: number = parseInt(process.env.PORT!) || 5000;


app.use(indexRouter.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

export default server;
