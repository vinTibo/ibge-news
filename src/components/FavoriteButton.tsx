import { useState } from "react";

type FavoriteButtonProps = {
  id: number;
};

function FavoriteButton({ id }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => setIsFavorite(!isFavorite);
  return (
    <button onClick={handleFavorite}>
      {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </button>
  );
}

export default FavoriteButton;