import React from "react";
import LabelIcon from '../../../Assets/label.png'
const Navbar = () => {
  return (
    <div className="app-header">
      <div>
        <img className="label-image" src={LabelIcon}/>
      </div>
    </div>
  )
}

export default Navbar