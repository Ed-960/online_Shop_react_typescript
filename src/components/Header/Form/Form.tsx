import React from "react";
import styles from "./form.module.css";
import search from "../../../images/search.svg";

const Form: React.FC = () => {
   return (
      <form className={styles.header__form}>
         <input placeholder="Search" className={styles.header__input} type="text" />
         <img className={styles.header__btn_img} alt="img" src={search} />
      </form >
   )

}









export default Form;