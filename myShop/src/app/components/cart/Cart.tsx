import { observer } from "mobx-react-lite"
import style from './Cart.module.scss'
import { shopApi } from "../../api/shop"
import store from "../../../store/app/AppStoreProvider"

const Cart = observer((): JSX.Element => {

  return (
    <div className={style.cart__list}>
      {
        store.datas.map((i: shopApi) => i.count ?
          <div className={style.cart}>
            <div className={style.block__remove}>
              <button className={style.btn__remove} onClick={() => store.removeCartItem(i.id, i.count)}>X</button>
            </div>
            <img src={i.img} width={50} height={50}/>
            <div className={style.cart__item__title}>Название: {i.title}</div>
            <div className={style.cart__item}>Цена: {i.price}</div>
            <div className={style.cart__item}>Кол-во: {i.count}
              <div className={style.btn__block}>
                <button className={style.btn} onClick={() => store.countBtnMin(i.id)}>-</button>
                <button className={style.btn} onClick={() => store.countBtnMax(i.id)}>+</button>
              </div>
            </div>
            <div className={style.cart__item}>Цена: {i.count * i.price}</div>
          </div>
        : '' )
      }
    </div>
  )
})

export default Cart
