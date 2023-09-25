import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICurrentDrink } from "../types/ICurrentDrink";
import { CocktailApi } from "../api/Cocktail";
import { RootState } from "../store/configureStore";

export const getCocktail = createAsyncThunk(
    "margaritaSlice/getMargarita",
    async (cocktailCode: string, { rejectWithValue }) => {
        try {
            const urlParams = new URLSearchParams({
                s: cocktailCode,
            });
            const response = await CocktailApi.get(urlParams);

            return response.status === 200 && response.data
                ? response.data
                : rejectWithValue(response);
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export type cocktailStateType = {
    cocktailCodes: string[];
    drinks: ICurrentDrink[] | null;
    currentDrink?: ICurrentDrink | null;
}

const initialState: cocktailStateType = {
    cocktailCodes: ["margarita", "mojito", "kir", "a1"],
    drinks: null,
    currentDrink: null,
};

export const cocktailSlice = createSlice({
    name: "cocktails",
    initialState,
    reducers: {
        setCurrentDrink: (state: cocktailStateType, { payload }: { payload: ICurrentDrink }) => {
            state.currentDrink = payload;
        },
    },
    extraReducers: {
        [getCocktail.pending.type]: (state: cocktailStateType) => {
            state.currentDrink = null;
        },
        [getCocktail.fulfilled.type]: (state: cocktailStateType, { payload }: { payload: { drinks: ICurrentDrink[] } }) => {
            state.drinks = payload.drinks;
        },
    },
});

export const { setCurrentDrink } = cocktailSlice.actions;

export const cocktailSelector = (state: RootState) => state.cocktails;
