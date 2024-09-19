export class TemporaryStorage<T> {
    store: T[];
    constructor(initialStore: T[]) {
        this.store = initialStore;
    }

    get minifigs() {
        return this.store;
    }
    isEmpty() {
        return this.store.length ? false : true;
    }
    add(newItems: T[]) {
        this.store = [...this.store, ...newItems];
    }
    getMinifigByIndex(index: number) {
        return this.store[index];
    }
}
export default TemporaryStorage;
