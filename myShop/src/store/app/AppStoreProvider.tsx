import { makeAutoObservable } from 'mobx'
interface arrData  {
  title: string;
  url?: string;
  id: number;
}
interface countAddType  {
  id: number;
  count: number
}
class AppStoreProvider {
  datas: arrData[] | any = []
  fullDatas: arrData[] | any = []
  catArr: [] = []
  page: number = 1
  totalPage: number = 5
  flagItem: boolean = true
  id: number = 0
  toggleCategory: boolean = false
  arrCategory: [] = []
  itm: string = ''
  tglItem: boolean = false
  pageNum: number = 1
  tglpage: boolean = false

  basketCount2: number = 0
  basketCount: number = 0
  idCart: number = 0
  cardsArr: any[] = []

  constructor() {
    makeAutoObservable(this)
  }

  toggleFn() {
    this.toggleCategory = !this.toggleCategory
  }

  todos(arr: arrData[]) {
    this.datas = arr
  }

  fullTodos(massiv: any) {
    this.fullDatas = massiv
  }

  changePage(num: number){
    this.page = num
    localStorage.setItem('page', JSON.stringify(this.page))
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

  filterTag(str: string) {
    if(str) {
      this.fullDatas = this.fullDatas.filter((item: any) => item.category === str)
    }
  }

  filterCategory(str: string) {
    this.arrCategory = this.fullDatas.filter((item: any) => item.category === str)
  }

  clickItemCard(id: number) {
    this.id = id
    this.flagItem = !this.flagItem
  }

  tgl(itm: string) {
    this.itm = itm
    this.tglItem = true
  }

  paginationTgl(pageNum: number) {
    this.pageNum = pageNum
    this.tglpage = true
    localStorage.setItem('pageNum', JSON.stringify(this.pageNum))
  }

  countAdd(id: number) {
    this.idCart = id
    this.datas.map((e: countAddType) => e.id === this.idCart ? e.count++ : '')
    this.basketCount++
    localStorage.setItem('basket', JSON.stringify(this.basketCount))
    // localStorage.setItem('datas', JSON.stringify(this.datas))
  }
}

const store = new AppStoreProvider()
export default store
