import React from 'react';
import css from "./Tariffs.module.css"
import Cards from './Cards/Cards';

const Tariffs = () => {
  return (
    <div className={css.tariff}>
      <h1 className={css.tariff__title}>
        наши тарифы
      </h1>
      <Cards />
    </div>
  )}

export default Tariffs