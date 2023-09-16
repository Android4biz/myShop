import { makeAutoObservable } from 'mobx'

class AppStoreProvider {
  datas: [] = []
  constructor() {
    makeAutoObservable(this)
  }
  todos() {
    this.datas = this.datas
  }
}

const store = new AppStoreProvider()
export default store
