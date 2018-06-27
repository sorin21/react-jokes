import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from "./store/store";
import { addJoke } from "./actions/jokes";
import  './App.scss';
import AppRouter from "./routers/AppRouter";


// const state = store.getState();

// store.subscribe(() => {
  // console.log(state);
// });

// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch(addJoke({ title: "Politist la mall", description: "Ala bala portocala" }));

const storeProvider = (<Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(storeProvider, document.getElementById("app"));