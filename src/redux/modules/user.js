import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "apis/userAPI";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const registerUser = createAsyncThunk(
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

export const loginUser = createAsyncThunk(
  "user/login",
  async (userInfo, thunkAPI) => {
    try {
      const { data } = await userAPI.login(userInfo);
      const { id, exp } = jwtDecode(data.token);
      Cookies.set("token", data.token, { expires: exp * 1000 });

      return thunkAPI.fulfillWithValue({ id });
    } catch (error) {
      const errorMEssage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMEssage);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "user/getUser",
  async (_, thunkAPI) => {
    try {
      await userAPI.getUser();
      const token = Cookies.get("token");
      const { id } = jwtDecode(token);
      return thunkAPI.fulfillWithValue({ id });
    } catch (error) {
      console.log(error);
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
  reducers: {
    resetUserState: (state) => {
      state.error = initialState.error;
      state.status = initialState.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetUserState } = userSlice.actions;
export default userSlice.reducer;
