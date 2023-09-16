export const GET_NEWS = 'GET_NEWS';
export const GET_FIRST_NEWS = 'GET_FIRST_NEWS';

export const getNews = (payload: any) => ({
  type: GET_NEWS,
  payload,
});

export const getFirstNews = (payload: any) => ({
  type: GET_FIRST_NEWS,
  payload,
});