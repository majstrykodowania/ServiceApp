import React from "react";

import ActionNavItems from "./ActionNavItems/ActionNavItems";
import BaseNavItems from "./BaseNavItems/BaseNavItems";
import styles from "./navItems.module.css";

const navItems = () => (
  <div className={styles.navItems}>
    <ActionNavItems />
    <BaseNavItems />
  </div>
);

export default navItems;
