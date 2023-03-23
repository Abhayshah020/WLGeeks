import {
    ADD_USER_LOGIN_DETAILS,
    REMOVE_USER_LOGIN_DETAILS,
  } from "../actionTypes/actionTypes";
  
  export const addUserLoginDetails = (userDetails) => (dispatch) => {
    dispatch({
      type: ADD_USER_LOGIN_DETAILS,
      payload: userDetails,
    });
  };
  
  export const removeUserLoginDetails = () => (dispatch) => {
    dispatch({
      type: REMOVE_USER_LOGIN_DETAILS,
    });
  };