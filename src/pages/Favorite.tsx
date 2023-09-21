import { useEffect, useState } from "react";
import CardLastNews from "../components/CardLastNews";
import CardNews from "../components/CardNews";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/actions";
import { Dispatch, StoreType } from "../types";
import NavBar from "../components/NavBar";
import { Button, Grid } from "@mui/material";

function Favorite() {
  const dispatch: Dispatch = useDispatch()
  const { newsArray, favoriteNews } = useSelector((state: StoreType) => state.news);
  const allFavoriteArray = newsArray.filter((news) => favoriteNews.includes(news.id));
  const firstFavoriteArray = allFavoriteArray[0];
  const favoriteArray = allFavoriteArray.slice(1);
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
        <CardLastNews lastNews={firstFavoriteArray} />
      </div>
      <NavBar />
      <Grid container spacing={3} style={{ marginTop: "30px" }}>
        {favoriteArray.slice(0, numberOfNews).map((news) =>
          <Grid item xs={12} sm={4} md={4} key={news.id}>
            <CardNews news={news} />
          </Grid>
        )}
      </Grid>
      {favoriteNews.length > numberOfNews &&
        <Button
          onClick={handleShowNews}
          variant="outlined"
          color="error"
          sx={{ marginTop: '20px' }}
        >
          mais notícias
        </Button>}
    </>
  );
}

export default Favorite;
