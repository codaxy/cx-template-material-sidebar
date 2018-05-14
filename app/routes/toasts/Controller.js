import { Controller } from "cx/ui";
import {showErrorToast, showInfoToast} from "../../components/toasts";

export default class extends Controller {
    onInit() {
        
    }

    showError() {
        showErrorToast("This as an error toast. It will automatically disappear after 5s.")
    }

    showInfo() {
        showInfoToast("This as an info toast. It will automatically disappear after 5s.")
    }
}
