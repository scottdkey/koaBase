import Router from 'koa-router';


const indexRouter = new Router();
indexRouter.get('/', async ctx => {
  ctx.body = { message: 'Hello World' };
  ctx.status = 200;
});

export default indexRouter;