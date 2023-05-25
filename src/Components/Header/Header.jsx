import React from "react"
import css from "./Header.module.css"
import  Navigation from "../Header/Navigation/Navigation"
import { useSelector } from 'react-redux'
import NoAuthorization from "./NoAuthorization/NoAuthorization"
import YesAuthorization from "./YesAuthorization/YesAuthorization"
import BurgerMenu from "./BurgerMenu/BurgerMenu"

const Header = () => {
    const accountInfo = useSelector((state)=>state.profile.companyInfo);
    const Account = accountInfo ? YesAuthorization : NoAuthorization

    return (
      <header className={css.header}>
          <div className={css.logo}></div>
          <Navigation />
          <Account />
          <BurgerMenu />
      </header>
    )
}

export default Header