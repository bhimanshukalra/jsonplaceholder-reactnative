import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import React from "react";

import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/redux/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(rootComponent);
