import React, { createContext, useReducer, useEffect } from "react";
import ActionType from "./action.type";
import AppReducer from "./AppReducer";

// initial state
const INITIAL_STATE = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(INITIAL_STATE);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  // using useEffect to save/persist data in localstorage
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //actions
  const addToWatchList = (movie) => {
    dispatch({ type: ActionType.ADD_TO_WATCH_LIST, payload: movie });
  };

  const removeFromWatchList = (id) => {
    dispatch({ type: ActionType.REMOVE_FROM_WATCH_LIST, payload: id });
  };

  const addToWatched = (movie) => {
    dispatch({ type: ActionType.ADD_TO_WATCHED, payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: ActionType.REMOVE_FROM_WATCHED, payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addToWatchList,
        removeFromWatchList,
        addToWatched,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
