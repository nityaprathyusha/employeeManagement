import { combineReducers } from "redux";

import userReducer from "./userReducer";
import loginReducer from "./loginReducer";

const rootReucer = combineReducers({
    user: userReducer,
    login: loginReducer
});
export default rootReucer;
