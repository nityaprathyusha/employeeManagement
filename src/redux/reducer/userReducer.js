import * as actionTypes from "../action/actionTypes";

 const INITIAL_STATE = {
     userData: ""
 };

 const userReducer = (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
      case actionTypes.USER_FETCH_DATA:
          return { userData: action.payload };
        default:
           return state;
    }
}
export default userReducer;