import React from "react";

import Search from "./Search/Search";
import CurrentUser from "./CurrentUser/CurrentUser";
import styles from "./header.module.css";

const header = () => (
  <div className={styles.header}>
    <Search />
    <CurrentUser />
  </div>
);

export default header;
