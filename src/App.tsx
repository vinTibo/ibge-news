import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, StoreType } from './types';
import { useEffect } from 'react';
import { getStorageFavoriteNews } from './redux/actions';
import Release from './pages/Release';
import News from './pages/News';
import Favorite from './pages/Favorite';

function App() {
  const { favoriteNews } = useSelector((state: StoreType) => state.news);
  const FavoriteLocalStorage = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    if (favoriteNews.length > 0) {
      localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));
    } else {
      if (FavoriteLocalStorage.length > 0 && favoriteNews.length < 1) {
        dispatch(getStorageFavoriteNews(FavoriteLocalStorage));
      }
    }
  }, [favoriteNews]);


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/release" element={<Release />} />
        <Route path="/news" element={<News />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  )
}

export default App;
