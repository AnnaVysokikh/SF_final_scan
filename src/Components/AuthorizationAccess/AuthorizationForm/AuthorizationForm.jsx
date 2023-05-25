import React, {useEffect, useState} from 'react'
import LoginPassword from './LoginPassword/LoginPassword';
import css from "./AuthorizationForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { dropStatus, signIn } from '../../../store/profile';
import google from './google.svg';
import yandex from './yandex.svg';
import facebook from './facebook.svg';

const AuthorizationForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signInStatus = useSelector(state => state.profile.status)
  useEffect(()=>{
    if(signInStatus === 'done'){
      navigate("/");
      dispatch(dropStatus())
    }
    if(signInStatus === 'error'){
      setError(true);
    }
  },[error , signInStatus, navigate, dispatch])
  const  handleSubmit = async () => {
    dispatch(signIn({
      login,
      password
    }))
  }

  const submitDisable = !( login && password )
  return (
      <div className={css.form__container}>
        <div className={css.form__linkBox}>
          <a className={css.form__link} href='#' >Войти</a>
          <a className={css.form__link_inactive} href='#'>Зарегистрироваться</a>
        </div>
        <LoginPassword login={login} password={password} setLogin={setLogin} setPassword={setPassword} error={error} />
        <button className={css.form__button} onClick={handleSubmit} disabled={submitDisable}
            style={submitDisable ? {opacity:`${'50%'}`} : {opacity:`${'100%'}`}}>Войти</button>
        <a className={css.form__ResumeLink} href='#' >Восстановить пароль</a>
        <div className={css.formFooterContainer}>
          <section className={css.formFooterSection}>Войти через:</section>
          <div className={css.formFooterBox}>
              <div className={css.formFooterBoxItem}>
              <a className={css.formFooterBoxLink} href='#'>
                  <img src={google} alt='GoogleLink' />
              </a>
              </div>
              <div className={css.formFooterBoxItem}>
              <a className={css.formFooterBoxLink} href='#'>
                  <img src={facebook} alt='Facebook' />
              </a> 
              </div>
              <div className={css.formFooterBoxItem}>
              <a className={css.formFooterBoxLink} href='#'>
                  <img src={yandex} alt='Yandex' />
              </a> 
              </div>
          </div>
        </div>
      </div>
  )
}

export default AuthorizationForm