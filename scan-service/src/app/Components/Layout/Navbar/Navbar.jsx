import React from "react";
import LabelIcon from '../../../Assets/label.png'
import styles from './navbar.module.scss'
const Navbar = () => {
  return (
    <div className="app-header">
      <div>
        <img className={styles["label-image"]} src={LabelIcon}/>
      </div>
      <div>
        <nav>
          <li>Главная</li>
          <li>Тарифы</li>
          <li>FAQ</li>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;