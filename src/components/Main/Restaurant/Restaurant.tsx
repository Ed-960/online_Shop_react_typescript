import React, { useState } from "react";
import styles from "./restaurant.module.css";

import clock from "../../../images/clock.svg";
import featuredIcon from "../../../images/restaurants/featured.png";
import ellipse from "../../../images/ellipse.png";
import bag from "../../../images/shopping_bag.svg";
import Food from "./Food/Food";
import { numVoid, resFoodObj } from "../../interfaces/interface";

interface Props {
   passSetCartFoods: numVoid
   name: string;
   resinfo: string[];
   resFoods: resFoodObj[];
   id: number;
   img: string;
}


const Restaurant: React.FC<Props> = (props) => {

   const [isImgHover, setisImgHover] = useState<boolean>(false);
   const onClick = (): void => {
      setisImgHover(!isImgHover);
   }

   type Typstyle = {
      display: string
   }

   const style: Typstyle = {
      display: isImgHover ? "block" : "none"
   };

   return (
      <div className={styles.restaurants__item}>
         <img alt='img' src={props.img} onClick={onClick} className={styles.restaurants__item_img} />
         <img alt='img' src={featuredIcon} style={style} className={styles.restaurants__item_icon}></img>
         <div className={styles.restaurants__item_info}>
            <div className={styles.restaurants__info_box}>
               <span className={styles.restaurants__name}>{props.name}</span>
               <div className={styles.restaurants__info}>
                  <img alt='img' src={clock} className={styles.clock} />
                  <span className={styles.restaurants__info_text_1}>{props.resinfo[0]}</span>
                  <img alt='img' src={ellipse} className={styles.restaurants__info_ellipse} />
                  <span className={styles.restaurants__info_text_2}>{props.resinfo[1]}</span>
               </div>
            </div>
            <img src={bag} alt='img'
               onClick={function () { props.passSetCartFoods(props.id) }} className={styles.restaurants__food_item_icon}></img>
            <div className={styles.restaurants__food_item}>
               {
                  props.resFoods.map((item, i) => <Food
                     key={i}
                     resName={item.resName}
                     img={item.img}
                  />)
               }
            </div>
         </div>
      </div>
   )
}
export default Restaurant;