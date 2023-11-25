import { makeAutoObservable } from 'mobx';
import {shop, shopApi} from '../../app/api/shop';
interface countAddType  {
  id: number;
  count: number;
  selected?: boolean;
}
class AppStoreProvider {
  datas: shopApi[] | [] = shop
  fullDatas: shopApi[] | [] = []
  catArr: [] = []
  page: number = 1
  totalPage: number = 5
  flagItem: boolean = true
  id: number = 0
  toggleCategory: boolean = false
  arrCategory: shopApi[] = []
  tglItem: boolean = false
  pageNum: number = 1
  tglpage: boolean = false
  idCart: number = 0
  countAdd: number = 0

  constructor() {
    makeAutoObservable(this)
    localStorage.setItem('datas', JSON.stringify(this.datas))
  }
  
  toggleFn() {
    this.toggleCategory = !this.toggleCategory
  }
  
  todos(shop: shopApi[]) {
    this.datas = shop
    // localStorage.setItem('datas', JSON.stringify(this.datas))
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

  paginationTgl(pageNum: number) {
    this.pageNum = pageNum
    this.tglpage = true
  }

  countAddIncrement(id: number) {
    this.idCart = id
    this.datas.map((e: countAddType) => e.id === this.idCart ? e.count++ : '')
    this.countAdd++
  }

  countAddDecrement(id: number) {
    this.idCart = id
    this.datas.map((e: countAddType) => e.id === this.idCart && e.count > 0 ? e.count-- : '')
    this.countAdd--
  }

  countBtnMax(id: number) {
    this.idCart = id
    this.datas.map((e: countAddType) => e.id === this.idCart ? e.count++ : '')
    // localStorage.setItem('countmax', JSON.stringify(this.datas))
  }

  countBtnMin(id: number) {
    this.idCart = id
    this.datas.map((e: countAddType) => e.id === this.idCart ? e.count-- : '')
    // localStorage.setItem('countmin', JSON.stringify(this.datas))
  }

  removeCartItem(id: number, count: number) {
    this.idCart = id
    this.datas = this.datas.filter((e: countAddType) => e.id !== this.idCart)
    if(this.datas) {
      this.countAdd = this.countAdd - count
    }
  }

  addClick(id: number) {
    this.idCart = id
    this.datas.map((e: countAddType) => {
      if(e.id === this.idCart) {
        e.count++
        this.countAdd++
      }
      localStorage.setItem('datasAdd', JSON.stringify(this.datas))
    })
  }
   
}

const store = new AppStoreProvider()
export default store
