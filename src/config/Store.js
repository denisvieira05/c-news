import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import HomeReducer from "../modules/home/HomeReducer";
import AuthenticationReducer from "../modules/authentication/AuthenticationReducer";
import ProfileReducer from "../modules/profile/ProfileReducer";

const appReducer = combineReducers({
  home: HomeReducer,
  authentication: AuthenticationReducer,
  profile: ProfileReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default createStore(rootReducer, {}, applyMiddleware(thunk));
