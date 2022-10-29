import React from "react";
import styles from "./images.module.css";
import cart from "../../../../images/added.svg";
import divider from "../../../../images/media__img/divider.svg";
import mini from "../../../../images/media__img/mini__btn.svg";
import { NavLink } from "react-router-dom";

interface Props {
   profilePicture: string
}

const Images: React.FC<Props> = (props) => {
   return (
      <div className={styles.header__menu_images}>
         <NavLink to='/cart'><img src={cart} alt='img' className={styles.cart} /></NavLink>
         <NavLink to="/Account"><img alt='img' src={props.profilePicture} className={styles.avatarka} /></NavLink>
         <img src={divider} alt='img' className={styles.divider} />
         <img src={mini} alt='img' className={styles.mini__menu} />
      </div>
   )
};









export default Images;