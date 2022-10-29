import React from "react";
import styles from "./headBlog.module.css";
import blueStar from "../../../../images/images_left/star__blue.png";
import grayStar from "../../../../images/images_left/star__gray.png";

const HeadBlog: React.FC = () => {
   return (
      <div className={styles.head__bar}>
         <div className={styles.head__bar_left}>
            <p className={styles.head__bar_left_text}>Overall rating</p>
            <div className={styles.stars__point}>
               <p className={styles.stars__point_number}>
                  4.2
               </p>
               <div className={`${styles.stars} ${styles.default__stars}`}>
                  <img src={blueStar} alt="img" className={styles.stars__img} />
                  <img src={blueStar} alt="img" className={styles.stars__img} />
                  <img src={blueStar} alt="img" className={styles.stars__img} />
                  <img src={blueStar} alt="img" className={styles.stars__img} />
                  <img src={grayStar} alt="img" className={styles.stars__img} />
               </div>
               <p className={styles.votes}>3 votes</p>
            </div>
         </div>
         <div className={styles.head__bar_right}>
            <button type="button" className={styles.head__bar_right_btn}>
               Leave review
            </button>
         </div>
      </div>
   )
}


export default HeadBlog;