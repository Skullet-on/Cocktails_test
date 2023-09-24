import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cocktailSelector,
  getCocktail,
  setCurrentDrink,
} from "../reducers/Cocktails";
import { capitalizeFirstLetter } from "../helpers/functools";
import { CocktailView } from "../components/CocktailView/CocktailView";
import "./Drinks.scss";

export function Drinks({ cocktail_code }) {
  const dispatch = useDispatch();
  const { drinks, currentDrink } = useSelector(cocktailSelector);

  useEffect(() => {
    dispatch(getCocktail(cocktail_code));
  }, [cocktail_code]);

  const handleChangeDrink = (drink) => {
    dispatch(setCurrentDrink(drink));
  };

  return (
    <div className="drinks__container">
      <h1>Available {capitalizeFirstLetter(cocktail_code)} cocktails:</h1>
      <ul className="drinks__button_list">
        {drinks.map((drink) => (
          <li
            className="drinks__button"
            key={drink.idDrink}
            onClick={() => handleChangeDrink(drink)}
          >
            {drink.strDrink}
          </li>
        ))}
      </ul>
      {!!Object.keys(currentDrink).length && <CocktailView />}
    </div>
  );
}
