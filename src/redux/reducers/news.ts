import { GET_NEWS } from "../actions";

const INITIAL_STATE = {
  firstNews: {},
  newsArray: [],
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
        firstNews: action.payload[0],
        newsArray: action.payload.slice(1),
      };
    default:
      return state;
  }
}

export default newsReducer;