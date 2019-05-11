import firebase from "firebase/app"
import "firebase/auth"
import { authentication } from "../firebase"

export const initialState = {
  isLoading: false,
  isAuthenticated: !!localStorage.getItem("id_token"),
  error: null
};

export const START_LOGIN = "Login/START_LOGIN";
export const LOGIN_SUCCESS = "Login/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "Login/LOGIN_FAILURE";
export const RESET_ERROR = "Login/RESET_ERROR";
export const LOGIN_USER = "Login/LOGIN_USER";
export const SIGN_OUT_SUCCESS = "Login/SIGN_OUT_SUCCESS";
export const GOOGLE_LOGIN_SUCCESS = "GOOGLE_LOGIN_SUCCESS"
export const GOOGLE_LOGIN_ERROR = "GOOGLE_LOGIN_ERROR"

export const startLogin = () => ({
  type: START_LOGIN
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const resetError = () => ({
  type: RESET_ERROR
});

export const googleLoginSuccess = user => ({
  type: GOOGLE_LOGIN_SUCCESS,
  payload: {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email
  }
})
export const googleLoginError = error => ({
  type: GOOGLE_LOGIN_ERROR,
  payload: error
})

export const loginUser = (login, password) => dispatch => {
  dispatch(startLogin());

  if (!!login && !!password) {
    setTimeout(() => {
      localStorage.setItem("id_token", "1");
      dispatch(loginSuccess());
    }, 2000);
  } else {
    dispatch(loginFailure());
  }
};

export const googleLogin = dispatch => {
  let provider = new firebase.auth.GoogleAuthProvider()
  authentication.signInWithPopup(provider)
    .then( user => {
      dispatch(googleLoginSuccess(user))
    })
    .catch( error => {
      dispatch(googleLoginError(error))
    })
}

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOut = () => dispatch => {
  localStorage.removeItem("id_token");
  dispatch(signOutSuccess());
};

export default function LoginReducer(state = initialState, { type, payload }) {
  switch (type) {
    case START_LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case RESET_ERROR:
      return {
        error: false
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false
      };
    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      }
    case GOOGLE_LOGIN_ERROR:
      console.log(payload.error)
      return state
    default:
      return state;
  }
}
