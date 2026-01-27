import { Toast } from "cx/widgets";

export function showErrorToast(msg: unknown) {
    Toast
        .create({
            message: String(msg),
            timeout: 5000,
            mod: 'error'
        })
        .open();
}

export function showInfoToast(msg: unknown) {
    Toast
        .create({
            message: String(msg),
            timeout: 5000,
            mod: 'dark'
        })
        .open();
}
