import {observer} from "mobx-react-lite"
import style from './Cart.module.scss'
import store from '../../../store/app/AppStoreProvider'
import {shopApi} from "../../api/shop"


const Cart = observer((): JSX.Element => {
  return (
    <div className={style.cart__item}>
      cart
      {
      store.datas.map((i: shopApi) => i.count ?
        <div className={style.cart}>
          <div>Название: {i.title}</div>
          <div>Цена: {i.price}</div>
          <div>Кол-во: {i.count}</div>
        </div>
        : '' )
      }
    </div>
  )
})

export default Cart
