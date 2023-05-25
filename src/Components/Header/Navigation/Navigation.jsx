import React from "react"
import css from "./Navigation.module.css"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link to="/">Главная</Link>
        </li>
        <li className={css.navItem}>
            <Link to="#">Тарифы</Link>
        </li>
        <li className={css.navItem}>
            <Link to="#">FAQ</Link>
        </li>
      </ul>
    </nav>
  )}

export default Navigation