import { useEffect, useState } from "react";
import CardLastNews from "../components/CardLastNews";
import CardNews from "../components/CardNews";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/actions";
import { Dispatch, StoreType } from "../types";
import NavBar from "../components/NavBar";

function Favorite() {
  const dispatch: Dispatch = useDispatch()
  const { newsArray, favoriteNews, firstNews } = useSelector((state: StoreType) => state.news);
  const FavoriteArray = newsArray.filter((news) => favoriteNews.includes(news.id));
  const [numberOfNews, setNumberOfNews] = useState(9);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  if (newsArray.length < 1) {
    return <h1>Carregando...</h1>;
  }

  const handleShowNews = () => {
    setNumberOfNews(numberOfNews + 3);
  };

  return (
    <>
      <div>
        <CardLastNews lastNews={firstNews} />
      </div>
      <NavBar />
      <div>
        {FavoriteArray.slice(0, numberOfNews).map((news) =>
          <div key={news.id}>
            <CardNews news={news} />
          </div>
        )}
      </div>
      {favoriteNews.length > numberOfNews && <button onClick={handleShowNews}>Carregar mais...</button>}
    </>
  );
}

export default Favorite;
