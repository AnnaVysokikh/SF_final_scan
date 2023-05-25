import React from 'react'
import css from "./AuthorizationAccess.module.css"
import peopleWithKey from './man3.svg'
import padlock from './padlock.svg'
import AuthorizationForm from './AuthorizationForm/AuthorizationForm'
import { useSelector } from 'react-redux'

const AuthorizationAccess = () => {
  const newWidth = useSelector(state => state.sizeScreen.width)


  const isShown = newWidth < 1270 ? true : false;
  return (
    <div className={css.wrapper}>
        <div className={css.leftBox}>
          <p className={css.title}>Для оформления подписки на тариф, необходимо авторизоваться.</p>
          <img className={css.main__image} src={peopleWithKey} alt='peopleWithKey' hidden={isShown}/>
        </div>
        <div className={css.rightBox}>
          <img className={css.main__padlockImg} src={padlock} alt='padlock' />
          <AuthorizationForm />
        </div>
        <img className={css.main__image} src={peopleWithKey} alt='peopleWithKey' hidden={!isShown}/>
    </div>
  )
}

export default AuthorizationAccess