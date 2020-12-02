import React from "react";

import "./DropDownItem.scss";

const DropDownItem = ({ name }) => {
  return (
    <div className="dropDownItem">
      <p>{name}</p>
    </div>
  );
};

export default DropDownItem;
