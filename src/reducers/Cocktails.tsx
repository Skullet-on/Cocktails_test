import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDrink } from "../types/IDrink";
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
    drinks: IDrink[] | null;
    currentDrink?: IDrink | null;
    isFetching: boolean;
}

const initialState: cocktailStateType = {
    cocktailCodes: ["margarita", "mojito", "kir", "a1"],
    drinks: null,
    currentDrink: null,
    isFetching: false,
};

export const cocktailSlice = createSlice({
    name: "cocktails",
    initialState,
    reducers: {
        setCurrentDrink: (state: cocktailStateType, { payload }: { payload: IDrink }) => {
            state.currentDrink = payload;
        },
    },
    extraReducers: {
        [getCocktail.pending.type]: (state: cocktailStateType) => {
            state.currentDrink = null;
            state.isFetching = true;
        },
        [getCocktail.fulfilled.type]: (state: cocktailStateType, { payload }: { payload: { drinks: IDrink[] } }) => {
            state.drinks = payload.drinks;
            state.isFetching = false;
        },
        [getCocktail.rejected.type]: (state: cocktailStateType, { payload }: { payload: { drinks: IDrink[] } }) => {
            state.drinks = payload.drinks;
            state.isFetching = false;
        },
    },
});

export const { setCurrentDrink } = cocktailSlice.actions;

export const cocktailSelector = (state: RootState) => state.cocktails;
