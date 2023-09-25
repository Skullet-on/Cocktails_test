import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { cocktailSelector, cocktailStateType } from "../../reducers/Cocktails";
import { capitalizeFirstLetter } from "../../helpers/functools";
import "./Sidebar.scss";

export function Sidebar() {
    const { cocktailCodes }: cocktailStateType = useSelector(cocktailSelector);

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
