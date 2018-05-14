import { Controller } from "cx/ui";
import {Auth} from "../../api/Auth";
import {showErrorToast} from "../../components/toasts";

export default class extends Controller {
    onInit() {
        Auth.registerStore(this.store);
    }

    login(e) {
        e.preventDefault();

        let params = this.store.get('login');
        Auth
            .signIn(params)
            .then(() => {
                this.store.delete('login');
            })
            .catch(err => {
                showErrorToast(err);
            })
    }
}
