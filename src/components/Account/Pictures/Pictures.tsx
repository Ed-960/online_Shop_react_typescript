import React from "react";
import styles from "./Pictures.module.css";
import { NavLink } from "react-router-dom";
import { accPictures, ava } from "../../interfaces/interface";


interface Props {
   arr: accPictures[]
   ava: ava;
}

const Pictures: React.FC<Props> = (props) => {

   return (
      <div className={styles.bgc}>
         <div className={styles.pictures}>
            {props.arr.map(img => (
               <NavLink key={img.id} to="/Account">
                  <div onClick={function () { props.ava(img.id) }} className={styles.ava}>
                     <img src={img.img} alt='avatarka' />
                  </div>
               </NavLink>
            )
            )}
         </div>
         <NavLink to="/Account"><button className={styles.btn}>Back</button></NavLink>
      </div>
   )
}

export default Pictures;