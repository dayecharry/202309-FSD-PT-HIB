import { API } from '../../axios/api';

export const registerUser = (formData, navigate) => async (dispatch) => {
  dispatch({ type: 'register_user' });
  try {
    const result = await API.post('user/register', formData);
    dispatch({ type: 'register_ok', payload: result.data });
    navigate('/login');
  } catch (error) {
    dispatch({ type: 'register_ko', payload: error.message });
  }
};

export const loginUser = (formData, navigate) => async (dispatch) => {
  dispatch({ type: 'login_user' });
  try {
    const result = await API.post('user/login', formData);
    dispatch({ type: 'login_user_ok', payload: result.data });
    localStorage.setItem("user", result.data.user)
    localStorage.setItem("token", result.data.token)
    navigate('/');
  } catch (error) {
    dispatch({ type: 'login_user_ko', payload: error.message });
  }
};

export const logoutUser = () => { };
