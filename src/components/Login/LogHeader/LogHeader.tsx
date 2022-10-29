import React from "react";
import styles from "./logHeader.module.css";

const LogHeader: React.FC = () => {
   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <div className={styles.header__inner}>
               <a href='/d' className={styles.logo}>
                  <h4 className={styles.header__logo_text_1}>
                     Food
                  </h4>
                  <h4 className={styles.header__logo_text_2}>
                     delivery
                  </h4>
               </a>
            </div>
         </div>
      </div>
   )
}


export default LogHeader;