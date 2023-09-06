import React, { useState } from 'react'
import style from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

const Navbar = (): JSX.Element => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <nav className={style.navbar}>
            <div className={style.logo }>
                <div className={style.logo__image}></div>
                <div className={style.logo__title}>Lalasia</div>
            </div>
            <ul className={style.list__navbar}>
                <li className={style.item__navbar} onClick={handleClick}>
                    <NavLink to='/products' className={toggle ? style.navlink : style.navlink__active}>Products</NavLink>
                </li>
                <li className={style.item__navbar} onClick={handleClick}>
                    <NavLink to='/categories' className={toggle ? style.navlink : style.navlink__active}>Categories</NavLink>
                </li>
                <li className={style.item__navbar} onClick={handleClick}>
                    <NavLink to='/about' className={toggle ? style.navlink : style.navlink__active}>About Us</NavLink>
                </li>
            </ul>
            <div className={style.user__block}>
                <div className={style.cart}></div>
                <div className={style.user}></div>
            </div>
        </nav>
    )
}

export default Navbar
