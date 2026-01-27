import { Controller } from "cx/ui";
import { Auth } from "../api/Auth";
import { m } from "../models";

export default class extends Controller {
    onInit() {
        Auth.registerStore(this.store);

        this.store.init(m.layout.aside.open, window.innerWidth >= 800);

        this.addTrigger("navigation", [m.url], () => {
            if (window.innerWidth < 800)
                this.store.set(m.layout.aside.open, false);
        });
    }

    onMainClick() {
        if (window.innerWidth < 800) this.store.set(m.layout.aside.open, false);
    }
}
