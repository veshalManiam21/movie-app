import MainStack from "./stack/mainStack";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import movieSaga from "./sagas/saga";
import { StyleSheet } from "react-native";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(movieSaga);

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
