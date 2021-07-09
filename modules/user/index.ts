import { UserKoaAdapter } from './adapter/koa';
import { UserPublicAdapter } from './adapter/public';
import { UserService } from './core/ports/user.service';

export class UserModule {
    public readonly publicAdapter: UserPublicAdapter;
    public readonly koaAdapter: UserKoaAdapter;

    constructor() {
        const userService = new UserService();
        this.publicAdapter = new UserPublicAdapter(userService);
        this.koaAdapter = new UserKoaAdapter(userService);
    }
}
