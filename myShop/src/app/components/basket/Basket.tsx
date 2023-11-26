import {observer} from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import store from '../../../store/app/AppStoreProvider'
import style from './Basket.module.scss'
import {NavLink} from 'react-router-dom'
// import useLocalStorage from "use-local-storage"

const Basket = observer(() => {
  // const [count, setCount] = useState(Number(localStorage.getItem('count')))
  // const [count, setCount] = useLocalStorage("datasAdd", store.countAdd)

  useEffect(() => {
    store.countAdd = Number(localStorage.getItem('count'))
    // const cnt: any = count
    // setCount(JSON.parse(cnt))
  }, [store.countAdd])
  // console.log(count, '<<<')
  return (
    <div className={style.user__block}>
      {/* <div className={style.count__basket}>{ count > 0 ? count : '' }</div> */}
      <div className={style.count__basket}>{ store.countAdd > 0 ? store.countAdd : '' }</div>
      <NavLink
        to='/cart'
        className={style.cart}
        ></NavLink>
      <div className={style.user}>
      </div>
    </div>
  )
})

export default Basket
