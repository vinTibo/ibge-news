import { useEffect } from "react";
import CardLastNews from "../components/CardLastNews";
import CardNews from "../components/CardNews";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/actions";
import { Dispatch, StoreType } from "../types";


function Home() {
  const dispatch: Dispatch = useDispatch()
  const { newsArray } = useSelector((state: StoreType) => state.news);
  useEffect(() => {
    dispatch(fetchNews);
    console.log(newsArray);
  }, []);
  return (
    <>
      <div>
        <CardLastNews />
      </div>
      <div>
        <CardNews />
      </div>
    </>

  );
}

export default Home;