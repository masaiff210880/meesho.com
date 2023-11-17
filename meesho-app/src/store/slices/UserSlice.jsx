
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an initial state
const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchMensData = createAsyncThunk("user/fetchMensData", async () => {
    const response = await axios.get("http://localhost:3001/mensproducts");
    return response.data;
  });
  
  export const fetchLadiesData = createAsyncThunk("user/fetchLadiesData", async () => {
    const response = await axios.get("http://localhost:3001/ladiesproducts");
    return response.data;
  });

  export const fetchChildrensData = createAsyncThunk("user/fetchChildrensData", async () => {
    const response = await axios.get("http://localhost:3001/childrens");
    return response.data;
  });

// Create an async thunk for posting data
export const postData = createAsyncThunk("user/postData", async (newData) => {
  const response = await axios.post("http://localhost:3001/mensproducts", newData);
  return response.data;
});

// Create an async thunk for updating data
export const updateData = createAsyncThunk("user/updateData", async (updatedData) => {
  const response = await axios.patch(`http://localhost:3001/mensproducts/${updatedData.id}`, updatedData);
  return response.data;
});

// Create an async thunk for deleting data
export const deleteData = createAsyncThunk("user/deleteData", async (id) => {
  await axios.delete(`http://localhost:3001/mensproducts/${id}`);
  return id;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    mensProducts: [],
    ladiesProducts: [],
    childrensProducts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle actions related to mens products
    builder
      .addCase(fetchMensData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMensData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mensProducts = action.payload;
      })
      .addCase(fetchMensData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Handle actions related to ladies products
    builder
      .addCase(fetchLadiesData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLadiesData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ladiesProducts = action.payload;
      })
      .addCase(fetchLadiesData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Handle actions related to childrens products
    builder
    .addCase(fetchChildrensData.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchChildrensData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.childrensProducts = action.payload;
    })
    .addCase(fetchChildrensData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
