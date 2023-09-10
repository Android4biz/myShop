import { makeAutoObservable } from 'mobx'

class AppStoreProvider {

    constructor() {
        makeAutoObservable(this)
    }
}

const store = new AppStoreProvider()
export default store
