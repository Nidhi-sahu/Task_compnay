import axios from 'axios';

export const signup = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:4000/signup', userData);
      dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SIGNUP_FAILURE', payload: error.message });
    }
  };
};

export const login = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:4000/login', userData);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
};
