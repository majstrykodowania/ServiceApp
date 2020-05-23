import React from "react";

import styles from "./userMenu.module.css";

const userMenu = (props) => (
  <div className={styles.userMenu}>
    <span>{props.username}</span>
    <i className="fas fa-chevron-down"></i>
  </div>
);

export default userMenu;
