import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from 'redux-logger';
import rootReducer from "@/store/rootReducer";

const customStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof customStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default customStore;
