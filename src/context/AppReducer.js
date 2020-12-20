import ActionType from "./action.type";

const AppReducer = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_WATCH_LIST:
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case ActionType.REMOVE_FROM_WATCH_LIST:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case ActionType.ADD_TO_WATCHED:
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };
    case ActionType.REMOVE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
};

export default AppReducer;
