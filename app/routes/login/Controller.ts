import { createModel } from "cx/data";
import { Controller } from "cx/ui";
import { Auth } from "../../api/Auth";
import { showErrorToast } from "../../components/toasts";

interface LoginModel {
    login: {
        username: string;
        password: string;
    };
}

const m = createModel<LoginModel>();

export default class extends Controller {
    onInit() {
        Auth.registerStore(this.store);
    }

    login(e: Event) {
        e.preventDefault();

        const params = this.store.get(m.login);
        Auth
            .signIn(params)
            .then(() => {
                this.store.delete(m.login);
            })
            .catch(err => {
                showErrorToast(err);
            });
    }
}
