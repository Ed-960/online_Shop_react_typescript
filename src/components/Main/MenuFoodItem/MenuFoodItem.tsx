import React from "react";
import styles from "./menuFoodItem.module.css";
import { strVoid } from "../../interfaces/interface";

interface Props {
   name: string;
   img: string
   getNameFood: strVoid;
}

const MenuFoodItem: React.FC<Props> = (props) => {
   return (
      <div onClick={function () { props.getNameFood(props.name) }}
         className={styles.menu__food_item}>
         <img src={props.img} alt='img' className={styles.menu__food_img} />
         <p className={styles.menu__food_text}>
            {props.name}
         </p>
      </div>
   )

}


export default MenuFoodItem;