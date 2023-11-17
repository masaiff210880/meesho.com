import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    createProduct(state, action) {},
    deleteProduct(state, action) {},
    updateProduct(state, action) {},
  },
});

export default  productSlice.reducer;
