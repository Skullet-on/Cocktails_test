import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { cocktailSelector, cocktailStateType, getCocktail } from "../../reducers/Cocktails";
import { CocktailView } from "../../components/CocktailView/CocktailView";
import { useAppDispatch } from "../../store/configureStore";
import "./Drinks.scss";

export function Drinks({ cocktailCode }: { cocktailCode: string }) {
    const dispatch = useAppDispatch();
    const { drinks }: cocktailStateType = useSelector(cocktailSelector);

    useEffect(() => {
        dispatch(getCocktail(cocktailCode));
    }, [cocktailCode]);

    return (
        <div className="drinks__container">
            {drinks && drinks.map((drink) => (<CocktailView key={drink.idDrink} drink={drink} />))}
        </div>
    );
}
