import React from "react";

import UserLogo from "./UserLogo/UserLogo";
import UserMenu from "./UserMenu/UserMenu";
import styles from "./currentUser.module.css";

const currentUser = () => (
  <div className={styles.currentUser}>
    <UserMenu username="Jakub G." />
    <UserLogo letter="J" />
  </div>
);

export default currentUser;
