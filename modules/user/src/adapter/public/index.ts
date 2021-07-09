import { UserService } from '../../core/ports/user.service';

export class UserPublicAdapter {
    constructor(public readonly userService: UserService) {}
}
