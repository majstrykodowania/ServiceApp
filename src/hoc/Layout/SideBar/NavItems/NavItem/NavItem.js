import React from "react";

import styles from "./navItem.module.css";

const navItem = (props) => {
  return (
    <li className={`${styles.navItem} ${props.active ? styles.active : null}`}>
      {props.children}
    </li>
  );
};

export default navItem;
