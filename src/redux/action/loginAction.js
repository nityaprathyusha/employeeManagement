import * as actionType from "./actionTypes";

export const loginCheck = () => dispatch => {
    fetch('loginData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) => response.json())
      .then((result) =>{
          return dispatch({ type: actionType.USER_SIGN_IN, payload: result})
      } ); 
};
  