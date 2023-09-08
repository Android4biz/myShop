import { makeAutoObservable } from 'mobx'

class AppStoreProvider {
    toggle = false
    constructor() {
        makeAutoObservable(this)
    }
    toggleFunc(): void {
        this.toggle = !this.toggle
    }
}

const store = new AppStoreProvider()
export default store
