import React from 'react'
import verticalLine from './verticalLine.svg'
import { useNavigate } from "react-router-dom"
import css from "./NoAuthorization.module.css"

const NoAuthorization = () => {

const navigate = useNavigate()

function handleClick() {
  navigate("/login")
}

return (
    <div className={css.panel}>
        <a className={css.panel__link} href='#'>Зарегистрироваться</a>
        <img className={css.panel__verticalLine} src={verticalLine} alt='verticalLine' />
        <button className={css.panel__button} type="button" onClick={handleClick}>
            Войти
        </button>
    </div>
  )}

export default NoAuthorization