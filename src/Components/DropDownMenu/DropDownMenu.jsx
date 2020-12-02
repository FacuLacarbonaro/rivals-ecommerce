import React, { useState } from "react";

import "./DropDownMenu.scss";

const DropDownMenu = ({ category, children }) => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  return (
    <div
      className="dropDownMenu"
      onClick={() => setDropDownMenu(!dropDownMenu)}
    >
      {category}
      <ul
        className={dropDownMenu ? "dropDownMenu__show" : "dropDownMenu__hidden"}
      >
        {children}
      </ul>
    </div>
  );
};

export default DropDownMenu;
