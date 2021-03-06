import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = user => dispatch => (
  APIUtil.login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
);

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)));
};

export const signup = (user) => dispatch => (
  APIUtil.signup(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)) )
);

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


window.signup = signup;
window.login = login;
window.logout = logout;
