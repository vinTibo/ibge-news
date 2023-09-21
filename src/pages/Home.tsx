import { useEffect, useState } from "react";
import CardLastNews from "../components/CardLastNews";
import CardNews from "../components/CardNews";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/actions";
import { Dispatch, StoreType } from "../types";
import NavBar from "../components/NavBar";
import { Button, Grid } from "@mui/material";

function Home() {
  const dispatch: Dispatch = useDispatch()
  const { newsArray } = useSelector((state: StoreType) => state.news);
  const firstHomeNews = newsArray[0];
  const homeNews = newsArray.slice(1);
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
        <CardLastNews lastNews={firstHomeNews} />
      </div>
      <NavBar />
      <Grid container spacing={3} style={{ marginTop: "30px" }}>
        {homeNews.slice(0, numberOfNews).map((news) =>
          <Grid item xs={12} sm={4} md={4} key={news.id}>
            <CardNews news={news} />
          </Grid>
        )}
      </Grid>
      {homeNews.length > numberOfNews &&
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

export default Home;