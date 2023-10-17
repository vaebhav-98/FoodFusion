import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "../features/CardSlice";
import CategorySlice from "../features/CategorySlice";
import SearchSlice from "../features/SearchSlice";

const store = configureStore({
    reducer: {
        cart: CardSlice,
        category: CategorySlice,
        search: SearchSlice,
    }
})

export default store;