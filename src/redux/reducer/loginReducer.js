import * as actionTypes from "../action/actionTypes";

 const INITIAL_STATE = {
     loginData: ""
 };

function loginReducer(state = INITIAL_STATE, action = {}){
    switch(action.type) {
      case actionTypes.USER_SIGN_IN:
          return { loginData: action.payload }
        default :
           return state;
    }
}
export default loginReducer;