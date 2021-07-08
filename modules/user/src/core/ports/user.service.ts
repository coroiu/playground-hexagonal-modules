import { User } from '../user';

import someFunction from 'identity-function';

export class UserService {
    async getUser(userId: string): Promise<User> {
        return {
            userId,
            name: `${userId}-name`,
            someVar: someFunction('someVar'),
        }
    }
}
