import React from "react"
import css from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.logo}></div>
            <div className={css.info}>
                <div className={css.contacts}>
                    <span>г. Москва, Цветной б-р, 40</span>
                    <span>+7 495 771 21 11</span>
                    <span>info@skan.ru</span>
                </div>
                <span className={css.copyright}>Copyright. 2022</span>
            </div>
        </div>
)}

  export default Footer