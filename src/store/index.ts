import { configureStore } from "@reduxjs/toolkit";
import animalSlice from "./animal/animalSlice";
import reportReducer from "./animal/reportSlice"; 

export const store = configureStore({
  reducer: {
    animal: animalSlice,
    report: reportReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
