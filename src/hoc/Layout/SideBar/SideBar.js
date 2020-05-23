import React from "react";

import Logo from "./Logo/Logo";
import NavItems from "./NavItems/NavItems";
import styles from "./sideBar.module.css";

const sideBar = () => (
  <div className={styles.sideBar}>
    <Logo />
    <NavItems />
  </div>
);

export default sideBar;
