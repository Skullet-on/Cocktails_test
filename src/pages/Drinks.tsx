import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { cocktailSelector, cocktailStateType, getCocktail, setCurrentDrink, } from "../reducers/Cocktails";
import { capitalizeFirstLetter } from "../helpers/functools";
import { CocktailView } from "../components/CocktailView/CocktailView";
import { ICurrentDrink } from "../types/ICurrentDrink";
import { useAppDispatch } from "../store/configureStore";
import "./Drinks.scss";

export function Drinks({ cocktailCode }: { cocktailCode: string }) {
    const dispatch = useAppDispatch();
    const { drinks, currentDrink }: cocktailStateType = useSelector(cocktailSelector);

    useEffect(() => {
        dispatch(getCocktail(cocktailCode));
    }, [cocktailCode]);

    const handleChangeDrink = (drink: ICurrentDrink) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(setCurrentDrink(drink));
    };

    return (
        <div className="drinks__container">
            <h1>Available {capitalizeFirstLetter(cocktailCode)} cocktails:</h1>
            <ul className="drinks__button_list">
                {drinks && drinks.map((drink) => (
                    <li
                        className={currentDrink && drink.idDrink === currentDrink.idDrink ? "drinks__button active" : "drinks__button"}
                        key={drink.idDrink}
                        onClick={() => handleChangeDrink(drink)}
                    >
                        {drink.strDrink}
                    </li>
                ))}
            </ul>
            {currentDrink && <CocktailView/>}
        </div>
    );
}
