import { useDispatch, useSelector } from "react-redux";
import { Dispatch, StoreType } from "../types";
import { addFavoriteNews, removeFavoriteNews } from "../redux/actions";

type FavoriteButtonProps = {
  id: number;
};

function FavoriteButton({ id }: FavoriteButtonProps) {
  const { favoriteNews } = useSelector((state: StoreType) => state.news);
  const dispatch: Dispatch = useDispatch();



  const handleFavorite = () => {
    if (favoriteNews.includes(id)) {
      dispatch(removeFavoriteNews(id));
    } else {
      dispatch(addFavoriteNews(id));
    }
    console.log(favoriteNews);
  };
  return (
    <button onClick={handleFavorite}>
      {favoriteNews.includes(id) ? "Remove from favorites" : "Add to favorites"}
    </button>
  );
}

export default FavoriteButton;