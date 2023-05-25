import React from 'react'
import css from "./Cards.module.css"
import lamp from './lamp.svg'
import aim from './aim.svg'
import laptop from './laptop.svg'

const Cards = () => {
  return (
    <div className={css.tariffCards}>
      <div className={css.card_beginner}>
        <div className={css.card}>
          <div className={css.card__title}>
            <h1>Beginner</h1>
            <p>Для небольшого исследования</p>
          </div>
          <div className={css.lamp}>
            <img src={lamp} alt='lamp' />
          </div>
        </div>
        <div className={css.card__body_beginner}>
            <span className={css.card__actualTariff}>Текущий тариф</span>
            <h2 className={css.card__price}>799 ₽<span className={css.card__oldPrice}>1 200 ₽</span></h2>
            <p className={css.card__priceExplanation}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
            <h3 className={css.card__list}>В тариф входит:</h3>
            <ul>
              <li className={css.card__listItem}>Безлимитная история запросов</li>
              <li className={css.card__listItem}>Безопасная сделка</li>
              <li className={css.card__listItem}>Поддержка 24/7</li>
            </ul>
            <button className={css.card__btn}>Перейти в личный кабинет</button>
        </div>
      </div>
      <div className={css.card_pro}>
      <div className={css.card}>
          <div className={css.card__title}>
            <h1>Pro</h1>
            <p>Для HR и фрилансеров</p>
          </div>
          <div className={css.aim}>
            <img src={aim} alt='aim' />
          </div>
        </div>
        <div className={css.card__body}>
            <span className={css.card__actualTariff} style={{visibility:'hidden'}}>Текущий тариф</span>
            <h2 className={css.card__price}>1 299 ₽<span className={css.card__oldPrice}>2 600 ₽</span></h2>
            <p className={css.card__priceExplanation}>или 279 ₽/мес. при рассрочке на 24 мес.</p>
            <h3 className={css.card__list}>В тариф входит:</h3>
            <ul>
              <li className={css.card__listItem}>Все пункты тарифа Beginner</li>
              <li className={css.card__listItem}>Экспорт истории</li>
              <li className={css.card__listItem}>Рекомендации по приоритетам</li>
            </ul>
            <button className={css.card__btn} style={{background:'#5970FF',color:'white'}}>Подробнее</button>
        </div>
      </div>
      <div className={css.card_business}>
      <div className={css.card}>
          <div className={css.card__title}>
            <h1>Business</h1>
            <p>Для корпоративных клиентов</p>
          </div>
          <div className={css.laptop}>
            <img src={laptop} alt='laptop' />
          </div>
        </div>
        <div className={css.card__body_business}>
            <span className={css.card__actualTariff} style={{visibility:'hidden'}}>Текущий тариф</span>
            <h2 className={css.card__price}>2 379 ₽<span className={css.card__oldPrice}>3 700 ₽</span></h2>
            <p className={css.card__priceExplanation}>или 379 ₽/мес. при рассрочке на 24 мес.</p>
            <h3 className={css.card__list}>В тариф входит:</h3>
            <ul>
              <li className={css.card__listItem}>Все пункты тарифа Pro</li>
              <li className={css.card__listItem}>Безлимитное количество запросов</li>
              <li className={css.card__listItem}>Приоритетная поддержка</li>
            </ul>
            <button className={css.card__btn} style={{background:'#5970FF',color:'white'}}>Подробнее</button>
        </div>
      </div>
    
    </div>
  )}

export default Cards
