import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "../features/CardSlice";

const store = configureStore({
    reducer : {
        cart : CardSlice,
    }
})

export default store;