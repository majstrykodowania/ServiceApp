import React from "react";

import styles from "./userLogo.module.css";

const userLogo = (props) => (
  <div className={styles.userLogo}>{props.letter}</div>
);

export default userLogo;
