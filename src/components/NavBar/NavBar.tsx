import React from "react";
import "../../App.scss";
import styles from "./NavBar.module.scss";
import NavItem from "./NavItem/NavItem";
import { NavItems } from "../../constants/navigation";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <a href="#home" className={styles.Logo}>
        Yoanna Krasteva
      </a>
      <ul>
        {NavItems.map((item, key) => (
          <NavItem key={key} link={item.link} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
