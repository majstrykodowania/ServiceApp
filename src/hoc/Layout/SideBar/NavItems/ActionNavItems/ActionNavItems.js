import React from "react";

import NavItem from "../NavItem/NavItem";
import styles from "./actionNavItems.module.css";

const actionNavItems = () => (
  <ul className={styles.actionNavItems}>
    <NavItem active>
      <i className="fas fa-chart-pie"></i> Home
    </NavItem>
    <NavItem>
      <i className="far fa-list-alt"></i> Oczekujące zlecenia
    </NavItem>
    <NavItem>
      <i className="fas fa-user"></i> Twoje zlecenia
    </NavItem>
    <NavItem>
      <i className="fas fa-folder-open"></i> Przyjmij zlecenie
    </NavItem>
  </ul>
);

export default actionNavItems;
