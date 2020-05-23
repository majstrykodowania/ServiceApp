import React from "react";
import { NavLink } from "react-router-dom";

import NavItem from "../NavItem/NavItem";
import styles from "./actionNavItems.module.css";

const actionNavItems = () => (
  <ul className={styles.actionNavItems}>
    <NavItem>
      <NavLink exact to="/" activeClassName={styles.active}>
        <i className="fas fa-chart-pie"></i> Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/unassigned-tasks" activeClassName={styles.active}>
        <i className="far fa-list-alt"></i> Oczekujące zlecenia
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/tasks-list" activeClassName={styles.active}>
        <i className="fas fa-user"></i> Twoje zlecenia
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/new-task" activeClassName={styles.active}>
        <i className="fas fa-folder-open"></i> Przyjmij zlecenie
      </NavLink>
    </NavItem>
  </ul>
);

export default actionNavItems;
