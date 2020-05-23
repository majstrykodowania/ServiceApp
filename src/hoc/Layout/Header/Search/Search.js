import React from "react";

import styles from "./search.module.css";

const search = () => (
  <div className={styles.search}>
    <i className="fas fa-search"></i>
    <input type="text" placeholder="Wyszukaj naprawę" />
  </div>
);

export default search;
