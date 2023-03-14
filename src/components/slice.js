import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./api";

const initialState = {
  fackeUsers: null,
  selectedUser: null,
  isLoaded: false
};

export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    return await api.Users.getUsers();
  }
);

export const getSelectedUserAsync = createAsyncThunk(
  "users/getSelectedUserAsync",
  async (id) => {
    return await api.Users.getUserDetails(id);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearPreviousUser: (state, action) => {
      state.selectedUser = null;
      state.isLoaded = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.fackeUsers = action.payload;
        state.isLoaded = true;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.isLoaded = true;
      })
      .addCase(getSelectedUserAsync.pending, (state) => {
        state.isLoaded = false;
        state.selectedUser = null;
      })
      .addCase(getSelectedUserAsync.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
        state.isLoaded = true;
      });
  }
});

export const { clearPreviousUser } = userSlice.actions;

export default userSlice.reducer;
