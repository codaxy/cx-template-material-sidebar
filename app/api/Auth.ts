import { createModel, View } from "cx/data";

let store: View | null = null;

interface UserInfo {
    username: string;
    displayName: string;
}

interface SignInParams {
    username: string;
    password: string;
}

interface AuthModel {
    user: UserInfo | null;
}

const m = createModel<AuthModel>();

export class Auth {
    static doSignIn({ username }: SignInParams): Promise<UserInfo> {
        // authenticate and return user info;
        return Promise.resolve({
            username,
            displayName: 'Test User'
        });
    }

    static signIn(params: SignInParams) {
        return this.doSignIn(params)
            .then(userInfo => {
                sessionStorage.setItem('dummyUserInfo', JSON.stringify(userInfo));
                store?.set(m.user, userInfo);
            });
    }

    static signOut() {
        // delete data from local/session storage or a cookie
        sessionStorage.removeItem('dummyUserInfo');
        window.location.reload();
    }

    static getLoggedInUser(): UserInfo | null {
        // read user info
        const info = sessionStorage.getItem('dummyUserInfo');
        if (info)
            return JSON.parse(info);

        // automatically log-in a test user
        if (info === null)
            return {
                username: 'test',
                displayName: 'TestUser'
            };

        return null;
    }

    static registerStore(s: View) {
        store = s;
        const user = this.getLoggedInUser();
        store.set(m.user, user);
    }
}
