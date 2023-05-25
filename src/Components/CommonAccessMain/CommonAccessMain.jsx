import React from 'react'
import css from "./CommonAccessMain.module.css"
import Top from './Top/Top'
import Carousel from './Carousel/Carousel'
import man2 from './man2.png'
import Tariffs from './Tariffs/Tariffs'


const CommonAccessMain = () => {
    return (
        <div className={css.wrapper}>
            <Top />
            <Carousel />
            <img className='man2' src={man2} alt='man' />
            <Tariffs />
        </div> 
    )
}

export default CommonAccessMain
