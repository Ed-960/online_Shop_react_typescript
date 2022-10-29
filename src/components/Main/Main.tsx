import React from "react";
import styles from "./main.module.css";
import TopItem from "./TopItem/TopItem";
import topItemImg1 from "../../images/top__item-img_1.png";
import topItemImg2 from "../../images/top__item-img_2.png";
import MenuFoodItem from "./MenuFoodItem/MenuFoodItem";
import Restaurant from "./Restaurant/Restaurant";
import { buttonStyleHideT, foodObj, numVoid, restaurantObj, strVoid } from "../interfaces/interface";

interface MainProps {
   food: foodObj[];
   res: restaurantObj[];
   passSetCartFoods: numVoid;
   foodName: string;
   getNameFood: strVoid;
   buttonStyleHide: buttonStyleHideT
}

const Main: React.FC<MainProps> = (props) => {

   const resMap = (items: restaurantObj[]) => {
      return items.map(item => <Restaurant
         key={item.id}
         name={item.name}
         img={item.img}
         resinfo={item.resinfo}
         resFoods={item.resFoods}
         id={item.id}
         passSetCartFoods={props.passSetCartFoods}
      />)
   }

   const filterRestaurantsByFood = (arr: restaurantObj[], type: string) => {
      const x = [];
      for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < arr[i].resFoods.length; j++) {
            if (arr[i].resFoods[j].resName === type) {
               x.push((arr[i]));
            };
         }
      }
      return x;
   }

   const filteredItems = (type: string) => {
      if (type === 'default') {
         return resMap(props.res)
      } else {
         return resMap(filterRestaurantsByFood(props.res, type))
      }
   }

   return (
      <main className={styles.main}>
         <section className={styles.top}>
            <div>
               <div className={styles.top__items}>
                  <TopItem src={topItemImg1} />
                  <TopItem src={topItemImg2} />
               </div>
               <div className={styles.menu__food}>
                  <div className={styles.menu__food_items}>
                     {
                        props.food.map(item => <MenuFoodItem
                           getNameFood={props.getNameFood}
                           key={item.id}
                           name={item.name}
                           img={item.img}
                        />)
                     }
                  </div>
               </div>
               <div className={styles.restaurants}>
                  <div className={styles.restaurants__where__and__btn}>
                     <p className={styles.restaurants__where}>
                        Nearby restaurants
                     </p>
                     <button style={props.buttonStyleHide} onClick={function () { props.getNameFood('default') }}>Show All</button>
                  </div>
                  <div className={styles.restaurants__items}>
                     {filteredItems(props.foodName)}
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}


export default Main;