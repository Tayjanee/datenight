import { configureStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

const initialState = {};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION":
      return state;
    default:
      return state;
  }
};

export default configureStore(
  combineReducers({
    app: AppReducer,
  }),
  applyMiddleware(ReduxThunk)
);
