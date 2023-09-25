import React from "react";
import { useInView } from 'react-intersection-observer';
import noImage from "../../static/images/no-image-icon.png";
import { IDrink } from "../../types/IDrink";
import "./CocktailView.scss";

export function CocktailView({ drink }: { drink: IDrink}) {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <div className="cocktailView__drink">
            <div className="cocktailView__descriptions">
                <div className="cocktailView__main_info">
                    <h1 className="cocktailView__name">{drink && drink.strDrink}</h1>
                    <p>{drink && drink.strCategory}</p>
                    <p>{drink && drink.strAlcoholic}</p>
                    <p>{drink && drink.strGlass}</p>
                    <h2>instructions:</h2>
                    <p>{drink && drink.strInstructions}</p>
                </div>
                <div ref={ref} className="cocktailView__image_container">
                    {inView ? (
                        <img
                            src={drink && drink.strDrinkThumb}
                            alt="cocktail_image"
                        />
                    ) : (<img src={noImage} alt="cocktail_image" />)}
                </div>
            </div>
            <div className="cocktailView__ingredients">
                <h2>List of ingredients:</h2>
                {drink &&
                    <>
                        <p>{drink.strMeasure1} {drink.strIngredient1}</p>
                        <p>{drink.strMeasure2} {drink.strIngredient2}</p>
                        <p>{drink.strMeasure3} {drink.strIngredient3}</p>
                        <p>{drink.strMeasure4} {drink.strIngredient4}</p>
                        <p>{drink.strMeasure5} {drink.strIngredient5}</p>
                        <p>{drink.strMeasure6} {drink.strIngredient6}</p>
                        <p>{drink.strMeasure7} {drink.strIngredient7}</p>
                        <p>{drink.strMeasure8} {drink.strIngredient8}</p>
                        <p>{drink.strMeasure9} {drink.strIngredient9}</p>
                        <p>{drink.strMeasure10} {drink.strIngredient10}</p>
                        <p>{drink.strMeasure11} {drink.strIngredient11}</p>
                        <p>{drink.strMeasure12} {drink.strIngredient12}</p>
                        <p>{drink.strMeasure13} {drink.strIngredient13}</p>
                        <p>{drink.strMeasure14} {drink.strIngredient14}</p>
                        <p>{drink.strMeasure15} {drink.strIngredient15}</p>
                    </>
                }
            </div>
        </div>
    );
}
