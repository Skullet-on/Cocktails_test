import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { cocktailSelector } from "../../reducers/Cocktails";
import "./Sidebar.scss";
import { capitalizeFirstLetter } from "../../helpers/functools";

export function Sidebar() {
  const { cocktailCodes } = useSelector(cocktailSelector);

  return (
    <div className="sidebar__container">
      {cocktailCodes.map((code) => (
        <NavLink key={code} to={`/${code}`} className="sidebar__link">
          {capitalizeFirstLetter(code)}
        </NavLink>
      ))}
    </div>
  );
}
