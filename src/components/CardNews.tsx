import CardContent from "@mui/material/CardContent";
import { NewsType } from "../types";
import FavoriteButton from "./FavoriteButton";
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

type CardNewsProps = {
  news: NewsType;
};


function CardNews({ news }: CardNewsProps) {
  const { id, titulo, introducao, data_publicacao, link } = news;
  const date = new Date();
  const currentDate = new Date(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
  const publicationDate = data_publicacao.split(" ")[0].split("/");
  const test = new Date(`${publicationDate[1]}/${publicationDate[0]}/${publicationDate[2]}`);
  const resultDate = (currentDate.getTime() - test.getTime()) / (1000 * 3600 * 24);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{titulo}</Typography>
        <Typography variant="body2" color="text.secondary">{introducao}</Typography>
        <p>{resultDate > 1 ? `${resultDate} dias atrás` : `${resultDate} dia atrás`}</p>
      </CardContent>
      <CardActions>
        <a href={link}>
          <button>Saiba mais</button>
        </a>
        <FavoriteButton id={id} />
      </CardActions>
    </Card>
  );
}

export default CardNews;