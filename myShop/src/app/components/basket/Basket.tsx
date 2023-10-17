import React from 'react'
import {observer} from 'mobx-react-lite'
import store from '../../../store/app/AppStoreProvider'
import style from './Basket.module.scss'
import {NavLink} from 'react-router-dom'

const Basket = observer(() => {
  
  React.useEffect(() => {
    store.basketCount = Number(localStorage.getItem('basket'))
  }, [store.basketCount])

  return (
    <div className={style.user__block}>
      <div className={style.count__basket}>{store.basketCount > 0 ? store.basketCount : ''}</div>
      <NavLink
        to='/basket'
        className={style.cart}
      ></NavLink>
      <div className={style.user}></div>
    </div>
  )
})

export default Basket
