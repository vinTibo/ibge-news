import CardContent from "@mui/material/CardContent";
import { NewsType } from "../../types";
import FavoriteButton from "../FavoriteButton";
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
  const dataFormat = new Date(`${publicationDate[1]}/${publicationDate[0]}/${publicationDate[2]}`);
  const resultDate = (currentDate.getTime() - dataFormat.getTime()) / (1000 * 3600 * 24);

  return (
    <Card sx={{ maxWidth: 438, border: "1px solid #e0e0e0", minHeight: 361 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "left", minHeight: 100, fontSize: "18px", fontWeight: "bold" }}>
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ textAlign: "left", fontSize: "15px" }}>
          {introducao}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between", marginInline: "10px" }}>
        <Typography variant="body2">{resultDate > 1 ? `${resultDate} dias atrás` : `${resultDate} dia atrás`}</Typography>
        <a href={link}>
          <button style={{ backgroundColor: "#4ef542", color: "black", fontSize: "15px" }}>
            Leia a notícia aqui
          </button>
        </a>
      </CardActions>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <FavoriteButton id={id} />
      </div>
    </Card>
  );
}

export default CardNews;