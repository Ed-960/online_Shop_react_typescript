import React from "react";
import styles from "./listItem.module.css";

type itemProps = {
   item: string
}

const ListItem: React.FC<itemProps> = (props) => {
   return (
      <li className={styles.menu__list_item}>
         <span className={styles.menu__list_link}>
            {props.item}
         </span>
      </li>
   )
}









export default ListItem;