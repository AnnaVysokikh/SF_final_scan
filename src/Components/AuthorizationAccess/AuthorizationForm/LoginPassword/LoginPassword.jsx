import React from 'react'
import css from "./LoginPassword.module.css";

const LoginPassword = ({login, password, setLogin, setPassword, error}) => {
  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }
  const handleLogin = (evt) => {
    setLogin(evt.target.value)
  }
  const visibility = error ? 'visible' : 'hidden'
  const inputColor = error ? 'red' : '#C7C7C7'
  return (
    <form className={css.form}>
        <label className={css.form__label} htmlFor='login'>Логин или номер телефона:</label>
        <input className={css.form__loginInput} onChange={handleLogin} id='login' type='text'/>
        <label className={css.form__label} htmlFor='password'>Пароль:</label>
        <input className={css.form__loginInput}
        onChange={handlePassword}
        id='password'
        type='password'
        style={{borderColor:inputColor}}/>
        <span className={css.form__errText} style={{visibility}}>Неправильный пароль</span>
    </form>
  )}

export default LoginPassword

