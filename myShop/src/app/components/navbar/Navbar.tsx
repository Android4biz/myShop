// import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import style from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import store from '../../../store/app/AppStoreProvider'

export const Navbar = observer((): JSX.Element => {

    return (
        <nav className={style.navbar}>
            <div className={style.logo }>
                <div className={style.logo__image}></div>
                <div className={style.logo__title}>Lalasia</div>
            </div>
            <ul className={style.list__navbar}>
                <li className={style.item__navbar} >
                    <NavLink to='/products'
                    className={store.toggle ? style.navlink : style.navlink__active}
                    onClick={() => store.toggleFunc()}
                >Products</NavLink>
                </li>
                <li className={style.item__navbar} >
                    <NavLink to='/categories'
                    className={store.toggle ? style.navlink : style.navlink__active}
                    onClick={() => store.toggleFunc()}
                >Categories</NavLink>
                </li>
                <li className={style.item__navbar} >
                    <NavLink to='/about'
                    className={store.toggle ? style.navlink : style.navlink__active}
                    onClick={() => store.toggleFunc()}
                >About Us</NavLink>
                </li>
            </ul>
            <div className={style.user__block}>
                <div className={style.cart}></div>
                <div className={style.user}></div>
            </div>
        </nav>
    )
})

// export default Navbar
