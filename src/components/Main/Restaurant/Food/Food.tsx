import React from "react";
import styles from "./food.module.css";
import { resFoodObj } from "../../../interfaces/interface";


const Food: React.FC<resFoodObj> = (props) => {

   return (
      <div className={styles.restaurants__foods}>
         <img src={props.img} alt="img" className={styles.restaurants__food_img} />
         <span className={styles.restaurants__food_name}>{props.resName}</span>
      </div>
   )
}
export default Food;