import * as actionType from "./actionTypes";

export const  fetchUser = () => dispatch => {
    fetch('userData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) => response.json())
      .then((result) => dispatch({ type: actionType.USER_FETCH_DATA, payload: result.user}));
   
}