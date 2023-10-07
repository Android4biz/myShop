import {observer} from 'mobx-react-lite'
import style from './Basket.module.scss'
import {NavLink} from 'react-router-dom'

const Basket = observer(() => {
  return (
    <div className={style.user__block}>
      <NavLink
        to='/basket'
        className={style.cart}
      ></NavLink>
      <div className={style.user}></div>
    </div>
  )
})

export default Basket
