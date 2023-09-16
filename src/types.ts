import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type StoreType = {
  news: {
    firstNews: NewsType;
    newsArray: NewsType[];
  }
};

export type NewsType = {
  id: number;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  imagens: string;
  link: string;
};


export type Dispatch = ThunkDispatch<StoreType, null, AnyAction>;