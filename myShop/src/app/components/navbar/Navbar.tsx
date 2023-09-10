import { observer } from 'mobx-react-lite'
import style from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

export const Navbar = observer((): JSX.Element => {
    return (
        <nav className={style.navbar}>
            <div className={style.logo }>
                <div className={style.logo__image}></div>
                <div className={style.logo__title}>Lalasia</div>
            </div>
            <ul className={style.list__navbar} >
                <li className={style.item__navbar} >
                    <NavLink
                    to='/products'
                    className={({isActive}) => isActive ? style.active : style.navlink}
                >Products</NavLink>
                </li>
                 <li className={style.item__navbar} >
                    <NavLink
                    to='/categories'
                    className={({isActive}) => isActive ? style.active : style.navlink}
                >Categories</NavLink>
                </li>
                <li className={style.item__navbar} >
                    <NavLink
                    to='/about'
                    className={({isActive}) => isActive ? style.active : style.navlink}
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
