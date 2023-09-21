import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type StoreType = {
  news: {
    newsArray: NewsType[];
    favoriteNews: number[];
  }
};

export type NewsType = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  imagens: string;
  link: string;
};


export type Dispatch = ThunkDispatch<StoreType, null, AnyAction>;