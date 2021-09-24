import { createStore, compose, applyMiddleware } from "redux";
import usersReducer from "../Reducers/usersReducer";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../Components/Firebase/config";

const Store = createStore(
  usersReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)
  )
);

export default Store;
