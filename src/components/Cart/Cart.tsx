import React from "react";
import { cartFoods } from "../interfaces/interface";
import styles from "./cart.module.css";
import CartFood from './CartFood/CartFood';

interface Props {
   cartFoods: cartFoods[]
   removeFoodCart: (id: number) => void;
}

const Cart: React.FC<Props> = (props) => {

   let price = 0;
   if (props.cartFoods.length === 0) {
      price = 0;
   } else {
      price = props.cartFoods.reduce((aggr, val) => {
         return aggr + val.price
      }, 0)
   }
   let tax = Math.round(price * 0.1);
   let total = price + tax;


   function createCartfood() {
      return props.cartFoods.map((item, i) => <CartFood removeFoodCart={props.removeFoodCart} key={i} item={item} id={i} />)
   }
   return (
      <div className={styles.cartPage}>
         <div className={styles.inner}>
            <div className={styles.info}>
               <div className={styles.info__item_product}>Product</div>
               <div className={styles.info__item}>Quantity</div>
               <div className={styles.info__item}>Subtotal</div>
            </div>
            <div className={styles.products}>
               {createCartfood()}
            </div>
         </div>
         <footer className={styles.footer}>
            <div className={styles.divider}></div>
            <div className={styles.price__info}>
               <div className={styles.Subtotal}>Subtotal: {price}</div>
               <div className={styles.tax}>Tax: {tax}</div>
               <div className={styles.Total}>Total: {total}</div>
            </div>
            <button type="button" className={styles.checkout}>Proceed to checkkout</button>
         </footer>
      </div>
   )
}

export default Cart;