import React from "react";
import { cartFoods } from "../../interfaces/interface";
import styles from "./cartFood.module.css";


interface Props {
   removeFoodCart: (id: number) => void;
   item: cartFoods
   id: number
}

const CartFood: React.FC<Props> = (props) => {

   return (
      <div>
         <div className={styles.product__box}>
            <div className={styles.product__box_info}>
               <img className={styles.product__img} src={props.item.img} alt='img' />
               <div className={styles.product__info}>
                  <div className={styles.product__name}>{props.item.resName}</div>
                  <div className={styles.product__price}>Price: {props.item.price}$</div>
                  <div className={styles.product__remove_btn} onClick={function () { props.removeFoodCart(props.id) }}>Remove</div>
               </div>
            </div>
            <div className={styles.count}>
               <div className={styles.count__field}>1</div>
            </div>
            <div className={styles.total_sum}>
               <div className={styles.sum__field}>{props.item.price}$</div>
            </div>
         </div>
         <div className={styles.divider_product}></div>
      </div>
   )
}

export default CartFood;