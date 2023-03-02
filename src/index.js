import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import App from "./App";

const initialState = {
  tooltipStates: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_tooltipStates":
      return { ...state, tooltipStates: action.tooltipStates };
    // case SET_LOCATION:
    //   return {
    //     ...state,
    //     address: { ...state.address, maplocation: action.maplocation },
    //   };
    // case "SET_LAT":
    //   return { ...state, lat: action.lat };
    // case "SET_LNG":
    //   return { ...state, lng: action.lng };
    // case "SET_ADDRESS":
    //   return { ...state, address: action.address };
    // case "SET_POST":
    //   return { ...state, postid: action.postid };
    default:
      return state;
  }
}

let store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
