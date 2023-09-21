import { ADD_FAVORITE_NEWS, GET_NEWS, GET_STORAGE_FAVORITE_NEWS, REMOVE_FAVORITE_NEWS } from "../actions";

const INITIAL_STATE = {
  newsArray: [],
  favoriteNews: [],
};

type ActionType = {
  type: string;
  payload: any;
};

function newsReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        newsArray: action.payload,
      };
    case ADD_FAVORITE_NEWS:
      return {
        ...state,
        favoriteNews: [...state.favoriteNews, action.payload],
      };
    case REMOVE_FAVORITE_NEWS:
      return {
        ...state,
        favoriteNews: state.favoriteNews.filter((id: number) => id !== action.payload),
      };
    case GET_STORAGE_FAVORITE_NEWS:
      return {
        ...state,
        favoriteNews: action.payload,
      };
    default:
      return state;
  }
}

export default newsReducer;