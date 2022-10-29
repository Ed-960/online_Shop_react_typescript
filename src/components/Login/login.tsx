import React, { useState } from "react";
import Blog from "./Blog/Blog";
import LogBody from "./LogBody/LogBody";
import LogHeader from "./LogHeader/LogHeader";
import styles from "./login.module.css";

import img_product_1 from "../../images/images_left/product_1.png";
import img_product_2 from "../../images/images_left/product_2.png";
import circle from "../../images/images_left/circle.svg";
import circle__white from "../../images/images_left/circle__white.png";
import { ReviewInfoObj, users } from "../interfaces/interface";


interface MainProps {
   ReviewInfo: ReviewInfoObj[]
   Users: users[]
}

const Login: React.FC<MainProps> = (props) => {
   const [rollPrice, setrollPrice] = useState<number>(22.56);
   const onMultiple = (): void => {
      setrollPrice((rollPrice * 100 + 22.56 * 100) / 100);
   }

   const [nigiriCount, setnigiriCount] = useState<number>(1);
   const [nigiriPrice, setnigiriPrice] = useState<number>(16.80);

   const onPriceMin = (): void => {
      setnigiriCount(nigiriCount - 1);
      setnigiriPrice((nigiriPrice * 100 - 16.80 * 100) / 100);
      if (nigiriCount <= 0) {
         setnigiriPrice(0);
         setnigiriCount(0);
      }
   }


   const onPricePluse = (): void => {
      setnigiriCount(nigiriCount + 1);
      setnigiriPrice((nigiriPrice * 100 + 16.80 * 100) / 100);
   }

   return (
      <div className={styles.mega__wrapper}>
         <div className={styles.wrapper}>
            <LogHeader />
            <LogBody Users={props.Users} />
         </div>
         <div className={styles.wrapper__left}>
            <main className={styles.main__left}>
               <div className={styles.container__left}>
                  <div className={styles.inner}>
                     <Blog ReviewInfo={props.ReviewInfo} />
                     <div className={styles.items__shop}>
                        <div className={styles.container_left}>
                           <img src={img_product_1} alt="img" className={styles.product} />
                           <div className={styles.product__information}>
                              <h6 className={styles.product__head}>Roll set</h6>
                              <p className={styles.product__info_text}>
                                 Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod
                                 corpora,
                                 et
                                 saepe.
                              </p>
                              <div className={styles.price__plus}>
                                 <p className={styles.price}>$ {rollPrice}</p>
                                 <button type="button" onClick={onMultiple} className={styles.plus}>+</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.items__shop_2}>
                     <div className={styles.container}>
                        <div className={styles.shop__inner}>
                           <img src={img_product_2} alt="img" className={styles.product_2} />
                           <div className={styles.products__shop}>
                              <div className={styles.items__shop_2_boxes}>
                                 <div className={styles.items__shop_2_boxes_left}>
                                    <h6 className={styles.product__head}>Nigiri set</h6>
                                    <p className={`${styles.product__info_text} ${styles.product__info_text_2}`}>
                                       Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod
                                       corpora,
                                       et
                                       saepe.
                                    </p>
                                 </div>
                                 <div className={styles.items__shop_2_boxes_right}>
                                    <button onClick={onPriceMin} className={styles.items__right_btn} type="button">-</button>
                                    <p className={styles.btn__text}>{nigiriCount}</p>
                                    <button onClick={onPricePluse} className={styles.items__right_btn} type="button">+</button>
                                 </div>
                              </div>
                              <div className={styles.price__plus}>
                                 <p className={styles.price}>$ {nigiriPrice}</p>
                                 <button type="button" className={`${styles.plus} ${styles.addw}`}> + <span className={styles.btn_text}>Add to
                                    cart</span></button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </main >
            <div className={styles.footer__slide}>
               <h3 className={styles.footer__Slide_head}>Leave reviews for all meals</h3>
               <p className={styles.footer__slide_text}>
                  Lorem ipsum dolor sit amet,
                  magna scaevola his ei. Cum te paulo probatus molestiae,
                  eirmod assentior eum ne, et omnis antiopam mel.
               </p>
               <div className={styles.footer__slide_circle}>
                  <img alt="img" src={circle} className={styles.slide__circle} />
                  <img alt="img" src={circle__white} className={styles.slide__circle} />
                  <img alt="img" src={circle} className={styles.slide__circle} />
                  <img alt="img" src={circle} className={styles.slide__circle} />
               </div>
            </div>
         </div>
      </div>

   )
}




export default Login;