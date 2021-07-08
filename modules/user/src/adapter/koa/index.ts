import Koa from 'koa';
import Router from "koa-router";

import { UserService } from '../../core/ports/user.service';

export class UserKoaAdapter {
    constructor(private readonly userService: UserService) {}

    applyMiddleware(app: Koa<Koa.DefaultState, Koa.DefaultContext>) {
        const router = new Router();

        router.get('/users/:userId', async (ctx) => {
            const user = await this.userService.getUser(ctx.params['userId']);
            ctx.body = user;
        });

        app.use(router.routes()).use(router.allowedMethods());
    }
}
