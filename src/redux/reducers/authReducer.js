const initialState = {
    isLoggedIn: false,
    user: null,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SIGNUP_SUCCESS':
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
          error: null
        };
      case 'SIGNUP_FAILURE':
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  