import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CocktailApi } from "../api/Cocktail";

export const getCocktail = createAsyncThunk(
  "margaritaSlice/getMargarita",
  async (cocktailCode, { rejectWithValue }) => {
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

const initialState = {
  cocktailCodes: ["margarita", "mojito", "kir", "a1"],
  drinks: [],
  currentDrink: {},
  isFetching: false,
};

export const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    setIsFetch: (state, { payload }) => {
      state.isFetching = payload;
    },
    setCurrentDrink: (state, { payload }) => {
      state.currentDrink = payload;
    },
  },
  extraReducers: {
    [getCocktail.pending]: (state) => {
      state.currentDrink = {};
    },
    [getCocktail.fulfilled]: (state, { payload }) => {
      state.drinks = payload.drinks;
    },
  },
});

export const { setCurrentDrink } = cocktailSlice.actions;

export const cocktailSelector = (state) => state.cocktails;
