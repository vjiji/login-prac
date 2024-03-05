import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "apis/userAPI";

export const _registerUser = createAsyncThunk(
  "user/register",
  async (userInfo, thunkAPI) => {
    try {
      await userAPI.register(userInfo);
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      const errorMEssage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMEssage);
    }
  }
);

const initialState = {
  user: {},
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(_registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(_registerUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(_registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
