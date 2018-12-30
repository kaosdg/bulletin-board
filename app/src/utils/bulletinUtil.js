import * as routes from '../constants/routes';

export function logout () {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  window.location.href = routes.LOGIN;
}
