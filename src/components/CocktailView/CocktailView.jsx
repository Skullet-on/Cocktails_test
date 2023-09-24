import React from "react";
import { useSelector } from "react-redux";
import { LazyImage } from "../LazyImage/LazyImage";
import noImage from "../../static/images/no-image-icon.png";
import { cocktailSelector } from "../../reducers/Cocktails";
import "./CocktailView.scss";

export function CocktailView() {
  const { currentDrink } = useSelector(cocktailSelector);
  const ingredients = Object.keys(currentDrink).filter((name) =>
    name.includes("Ingredient")
  );

  return (
    <div>
      <div className="cocktailView__descriptions">
        <div className="cocktailView__main_info">
          <h1 className="cocktailView__name">{currentDrink.strDrink}</h1>
          <p>{currentDrink.strCategory}</p>
          <p>{currentDrink.strAlcoholic}</p>
          <p>{currentDrink.strGlass}</p>
          <h2>instructions:</h2>
          <p>{currentDrink.strInstructions}</p>
        </div>
        <div className="cocktailView__image_container">
          {currentDrink.strDrinkThumb && (
            <LazyImage
              src={currentDrink.strDrinkThumb}
              alt="image"
              placeholderImg={noImage}
            />
          )}
        </div>
      </div>
      <div className="cocktailView__ingredients">
        <h2>List of ingredients:</h2>
        {ingredients.map((ingredient, index) => {
          return (
            <p key={ingredient}>
              {currentDrink[`strMeasure${index}`]}{" "}
              {currentDrink[`strIngredient${index}`]}
            </p>
          );
        })}
      </div>
    </div>
  );
}
