import { Dispatch } from "redux";
import { NewsType } from "../../types";

export const GET_NEWS = 'GET_NEWS';

export const getNews = (payload: NewsType[]) => ({
  type: GET_NEWS,
  payload,
});

export const fetchNews = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
      const data = await response.json();
      dispatch(getNews(data.items));
    } catch (error) {
      console.log(error);
    }
  };
};
