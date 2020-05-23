import React from "react";
import { NavLink } from "react-router-dom";

import NavItem from "../NavItem/NavItem";
import styles from "./baseNavItems.module.css";

const baseNavItems = () => (
  <ul className={styles.baseNavItems}>
    <NavItem>
      <NavLink to="/clients" activeClassName={styles.active}>
        <i className="fas fa-address-book"></i> Klienci
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/store" activeClassName={styles.active}>
        <i className="fas fa-box-open"></i> Magazyn
      </NavLink>
    </NavItem>
  </ul>
);
export default baseNavItems;
