import { makeAutoObservable } from 'mobx'

class AppStoreProvider {
  datas: [] = []
  page: number = 1
  totalPage: number = 5
  constructor() {
    makeAutoObservable(this)
  }
  todos() {
    this.datas = this.datas
  }
  changePage(num: number){
    this.page = num
  }
  nextClick() {
    if(this.page < 5) {
      this.page += 1
    } else {
      this.page = 1
    }
  }
  previosClick() {
    if(store.page > 1) {
      this.page -= 1
    } else {
      this.page = 5
    }
  }
}

const store = new AppStoreProvider()
export default store
