import React from "react";
import styles from "./orders.module.css";

const Orders: React.FC = () => {
   return (
      <div className={styles.restaurantsList}>
         <p>Order1</p>
         <p>Order2</p>
      </div>
   )
}

export default Orders;