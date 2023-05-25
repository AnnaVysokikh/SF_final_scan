import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import css from "./Top.module.css"
import man1 from './man1.png';

const Top = () => {
    const companyInfo = useSelector((state)=>state.profile.companyInfo);
    const navigate = useNavigate();
    return (
        <div className={css.wrapper}>
            <div className={css.leftBlock}>
            <p className={css.title}>сервис по поиску публикаций <br/> о компании <br/> по его инн</p>
            <p className={css.text}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
            {companyInfo && <button className={css.btn} onClick={()=>navigate('/search')}>Запросить данные</button>}
        </div>
        <div className={css.rightBlock}>
          <img src={man1} alt='фон' />
        </div>
      </div>
    )}

export default Top
