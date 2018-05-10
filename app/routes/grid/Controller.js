import { Controller } from "cx/ui";

export default class extends Controller {
    onInit() {
        this.store.init('$page', {
            filter: {
                page: 1,
                pageSize: 20,
                pageCount: 10
            }
        });

        this.addTrigger('load', ['$page.filter'], ::this.load, true)
    }

    load() {
        let { page, pageSize } = this.store.get('$page.filter');

        this.store.set('$page.data', Array.from({length: pageSize}, (_, index) => ({
            field1: `Record #${(page - 1) * pageSize + index + 1}`,
            field2: Math.random() * 5000,
            field3: Math.random() * 1000,
            field4: Math.random(),
        })));
    }
}
