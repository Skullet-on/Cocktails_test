import React from "react";
import { useSelector } from "react-redux";
import { LazyImage } from "../LazyImage/LazyImage";
import noImage from "../../static/images/no-image-icon.png";
import { cocktailSelector, cocktailStateType } from "../../reducers/Cocktails";
import "./CocktailView.scss";

export function CocktailView() {
    const { currentDrink }: cocktailStateType = useSelector(cocktailSelector);

    return (
        <div>
            <div className="cocktailView__descriptions">
                <div className="cocktailView__main_info">
                    <h1 className="cocktailView__name">{currentDrink && currentDrink.strDrink}</h1>
                    <p>{currentDrink && currentDrink.strCategory}</p>
                    <p>{currentDrink && currentDrink.strAlcoholic}</p>
                    <p>{currentDrink && currentDrink.strGlass}</p>
                    <h2>instructions:</h2>
                    <p>{currentDrink && currentDrink.strInstructions}</p>
                </div>
                <div className="cocktailView__image_container">
                    {currentDrink && currentDrink.strDrinkThumb && (
                        <LazyImage
                            src={currentDrink && currentDrink.strDrinkThumb}
                            placeholderImg={noImage}
                            errorImg={noImage}
                        />
                    )}
                </div>
            </div>
            <div className="cocktailView__ingredients">
                <h2>List of ingredients:</h2>
                {currentDrink &&
                    <>
                        <p>{currentDrink.strMeasure1} {currentDrink.strIngredient1}</p>
                        <p>{currentDrink.strMeasure2} {currentDrink.strIngredient2}</p>
                        <p>{currentDrink.strMeasure3} {currentDrink.strIngredient3}</p>
                        <p>{currentDrink.strMeasure4} {currentDrink.strIngredient4}</p>
                        <p>{currentDrink.strMeasure5} {currentDrink.strIngredient5}</p>
                        <p>{currentDrink.strMeasure6} {currentDrink.strIngredient6}</p>
                        <p>{currentDrink.strMeasure7} {currentDrink.strIngredient7}</p>
                        <p>{currentDrink.strMeasure8} {currentDrink.strIngredient8}</p>
                        <p>{currentDrink.strMeasure9} {currentDrink.strIngredient9}</p>
                        <p>{currentDrink.strMeasure10} {currentDrink.strIngredient10}</p>
                        <p>{currentDrink.strMeasure11} {currentDrink.strIngredient11}</p>
                        <p>{currentDrink.strMeasure12} {currentDrink.strIngredient12}</p>
                        <p>{currentDrink.strMeasure13} {currentDrink.strIngredient13}</p>
                        <p>{currentDrink.strMeasure14} {currentDrink.strIngredient14}</p>
                        <p>{currentDrink.strMeasure15} {currentDrink.strIngredient15}</p>
                    </>
                }
            </div>
        </div>
    );
}
