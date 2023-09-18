import { useDispatch, useSelector } from "react-redux";
import { Dispatch, StoreType } from "../types";
import { addFavoriteNews, removeFavoriteNews } from "../redux/actions";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
  };

  return (
    <button onClick={handleFavorite}>
      {favoriteNews.includes(id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </button>
  );
}

export default FavoriteButton;