import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/slice";
const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export default store;