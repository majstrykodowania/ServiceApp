import React from "react";

import NavItem from "../NavItem/NavItem";
import styles from "./baseNavItems.module.css";

const baseNavItems = () => (
  <ul className={styles.baseNavItems}>
    <NavItem>
      <i className="fas fa-address-book"></i> Klienci
    </NavItem>
    <NavItem>
      <i className="fas fa-box-open"></i> Magazyn
    </NavItem>
  </ul>
);
export default baseNavItems;
