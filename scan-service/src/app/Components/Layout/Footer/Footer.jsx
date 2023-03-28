import React from "react";
import styles from "./footer.module.scss"
import LabelIcon from "../../../Assets/label-white.png"
import CompanyInfo from "./CompanyInfoFooter/CompanyInfo";
const Footer = () => {
  return (
    <div className="app-footer">
      <div className={styles["image-container"]}>
        <img className="label-image" src={LabelIcon}/>
      </div>
      <CompanyInfo />
    </div>
  )
}

export default Footer