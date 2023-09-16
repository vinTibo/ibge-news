import { GET_NEWS, GET_FIRST_NEWS } from "../actions";

const INITIAL_STATE = {
  firstNews: {},
  news: [],
  loading: false,
  error: null,
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
        loading: true,
        firstNews: action.payload.slice(1),
      };
    case GET_FIRST_NEWS:
      return {
        ...state,
        loading: true,
        news: action.payload[0],
      };
    default:
      return state;
  }
}

export default newsReducer;