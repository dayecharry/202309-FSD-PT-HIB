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

export const loginUser = () => {};

export const logoutUser = () => {};
