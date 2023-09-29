import { makeAutoObservable } from 'mobx'
interface arrData  {
  title: string;
  url?: string;
  id: number;
}
class AppStoreProvider {
  datas: arrData[] | any = []
  fullDatas: arrData[] | any = []
  page: number = 1
  totalPage: number = 5
  flagItem: boolean = true

  constructor() {
    makeAutoObservable(this)
  }

  todos(arr: arrData[]) {
    this.datas = arr
  }

  fullTodos(massiv: any) {
    this.fullDatas = massiv
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

  filterProduct(str: string) {
    if (str) {
      this.datas = this.fullDatas.filter((item: any) => item.title === str)
    } else if (!str) {
      this.datas = this.datas.map((item: any) => item)
    }
  }

  clickItemCard() {
    this.flagItem = !this.flagItem
  }
}

const store = new AppStoreProvider()
export default store
