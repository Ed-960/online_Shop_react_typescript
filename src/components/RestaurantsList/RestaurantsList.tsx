import React from "react";
import styles from "./restaurantsList.module.css";

const RestaurantsList: React.FC = () => {
   return (
      <div className={styles.restaurantsList}>
         <p>restaurant1</p>
         <p>restaurant2</p>
      </div>

   )
}

export default RestaurantsList;