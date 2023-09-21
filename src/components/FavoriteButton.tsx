import { useDispatch, useSelector } from "react-redux";
import { Dispatch, StoreType } from "../types";
import { addFavoriteNews, removeFavoriteNews } from "../redux/actions";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from "@mui/material";

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
    <Button onClick={handleFavorite}>
      {favoriteNews.includes(id) ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderIcon sx={{ color: "black" }} />}
    </Button>
  );
}

export default FavoriteButton;