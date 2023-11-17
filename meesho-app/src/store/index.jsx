import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/UserSlice";
import  productSlice  from "./slices/ProductsSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
        products: productSlice,
    },
});

export default store;