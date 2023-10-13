import {observer} from 'mobx-react-lite'
import store from '../../../store/app/AppStoreProvider'
import style from './Basket.module.scss'
import {NavLink} from 'react-router-dom'

const Basket = observer(() => {
  return (
    <div className={style.user__block}>
      <div className={style.count__basket}>{store.basketCount2}</div>
      <NavLink
        to='/basket'
        className={style.cart}
      ></NavLink>
      <div className={style.user}></div>
    </div>
  )
})

export default Basket
