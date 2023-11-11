import { makeAutoObservable } from 'mobx'

class CartStore {
  items: [] = []
  // count: number = 0
  constructor(){
    makeAutoObservable(this)
  }
  addItem(item: any) {
    this.items.push(item)
  }
}

const cartStore = new CartStore()
export default cartStore