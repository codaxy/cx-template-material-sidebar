import { Controller } from "cx/ui";
import { showErrorToast, showInfoToast } from "../../components/toasts";

export default class extends Controller {
    onInit() {

    }

    showError() {
        showErrorToast("This is an error toast. It will automatically disappear after 5s.");
    }

    showInfo() {
        showInfoToast("This is an info toast. It will automatically disappear after 5s.");
    }
}
