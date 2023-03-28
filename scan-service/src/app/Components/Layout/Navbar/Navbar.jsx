import React from "react";
import LabelIcon from '../../../Assets/label-green.png'
import styles from './navbar.module.scss'
import { Link } from "react-router-dom";
import UserHeader from "./UserAccount/UserHeader";
const Navbar = () => {
  return (
    <div className="app-header">
      <div className={styles["header-container"]}>
        <img className="label-image" src={LabelIcon}/>
      </div>
      <div className={styles["header-container"]}>
        <nav className={styles.navigation}>
          <Link to="/">Главная</Link>
          <Link to="/">Тарифы</Link>
          <Link to="/">FAQ</Link>
        </nav>
      </div>
      <div className={styles["header-container"]}>
        <UserHeader />
      </div>
    </div>
  )
}

export default Navbar;