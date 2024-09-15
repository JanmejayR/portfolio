import React from "react";
const NavMenuIcon = ({navIconClick , handleNavIconClick }) => {
  return (
    <div className="nav-icon fixed z-30 lg:hidden top-4 left-4 " >
      <label className="bar h-10 w-12" htmlFor="check" >
        <input type="checkbox" id="check" onChange={handleNavIconClick} checked={navIconClick}/>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </label>
    </div>
  );
};

export default NavMenuIcon;
