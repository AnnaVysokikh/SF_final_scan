import React from 'react'
import {useNavigate} from 'react-router-dom'
import avatar from './avatar.svg'
import css from "./Avatar.module.css"
import { signOut } from '../../../../store/profile'
import { useDispatch } from 'react-redux'

function ExitButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function handleClick() {
    navigate("/login");
    dispatch(signOut());
  }
  return (
    <button className={css.avatar__button} type="button" onClick={handleClick}>
      Выйти
    </button>
  )
}

const Avatar = () => {
  return (
    <div className={css.avatar}>
      <div className={css.avatar__content}>
        <span>Алексей А.</span>
        <ExitButton />
      </div>
      <div className='avatar__img'>
        <img src={avatar} alt='avatar'/>
      </div>
    </div>
  )
}

export default Avatar