import {
    ADD_USER_LOGIN_DETAILS,
    REMOVE_USER_LOGIN_DETAILS,
  } from "../actionTypes/actionTypes";
  
  const initialState = {
    email: "",
    name: "",
    countryName:"",
    phone:"",
    _id: "",
    selection:"",
  }; 
  
  const userSlice = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER_LOGIN_DETAILS:
        const { name, email,countryName, _id,phone,selection} = action.payload;
        return {
          ...state,
          name,
          email,
          countryName,
          _id,
          phone,
          selection,
        };
      case REMOVE_USER_LOGIN_DETAILS:
        return {
          ...state,
          name: "",
          email: "",
          countryName:"",
          _id: "",
          phone:"",
          selection:"",
        };
      default:
        return state;
    }
  };
  
  export default userSlice;
  