import Koa from 'koa';

import { UserModule } from '@modules/user';

const app = new Koa();

const userModule = new UserModule();
userModule.koaAdapter.applyMiddleware(app);

app.use(async (ctx) => {
  ctx.body = 'Hello world';
});

app.listen(3000);

console.log('Server running at port 3000.');