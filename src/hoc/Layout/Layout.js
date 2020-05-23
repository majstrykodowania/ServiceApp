import React from "react";

import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import styles from "./layout.module.css";

const layout = (props) => (
  <div className={styles.layout}>
    <SideBar />
    <div className={styles.appArea}>
      <Header />
      <p>Props Children</p>
    </div>
  </div>
);

export default layout;
