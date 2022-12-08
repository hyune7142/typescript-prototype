import { combineReducers } from "redux";
import auth from "@/store/reducers/auth";

const rootReducer = combineReducers({
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;