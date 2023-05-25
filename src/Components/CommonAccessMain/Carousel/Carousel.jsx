import React from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import css from "./Carousel.module.css"
import clock from'./clock.svg';
import lens from'./lens.svg';
import shield from './shield.svg';
import { ReactComponent as RightChevron } from './right-chevron.svg';
import { ReactComponent as LeftChevron } from './left-chevron.svg';

function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightChevron 
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}
function LeftArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftChevron 
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}
const Carousel = () => {
  const newWidth = useSelector(state => state.sizeScreen.width)
  let slides = newWidth < 1200 ? 2 : 3
  if (newWidth < 770) slides = 1

  const settings = {
      slidesToScroll: 1,
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: slides,
      swipeToSlide: true,
      nextArrow: <RightArrow />,
      prevArrow: <LeftArrow />,
    }
    return (
      <div>
        <h2 className={css.slider__title}>почему именно мы</h2>
        <div className={css.slider}>
          <Slider {...settings}>
            <div>
              <div className={css.slider__card}>
                <img className={css.card__img} src={clock} alt='clock' />
                <section className={css.card__section}>Высокая и оперативная скорость обработки заявки</section>
              </div>
            </div>
            <div>
              <div className={css.slider__card}>
                <img className={css.card__img} src={lens} alt='clock' />
                <section className={css.card__section}>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</section>
              </div>
            </div>
            <div>
              <div className={css.slider__card}>
                <img className={css.card__img} src={shield} alt='clock' />
                <section className={css.card__section}>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</section>
              </div>
            </div>
            <div>
              <div className={css.slider__card}>
                <img className={css.card__img} src={clock} alt='clock' />
                <section className={css.card__section}>Высокая и оперативная скорость обработки заявки</section>
              </div>
            </div>
          </Slider>
        </div>
        
      </div>
    )}
export default Carousel;
