import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { NewsType } from "../types";
import FavoriteButton from "./FavoriteButton";

type CardLastNewsProps = {
  lastNews: NewsType;
};

function CardLastNews({ lastNews }: CardLastNewsProps) {
  const { id, titulo, introducao, data_publicacao, imagens, link } = lastNews;
  const date = new Date();
  const currentDate = new Date(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
  const publicationDate = data_publicacao.split(" ")[0].split("/");
  const dataFormat = new Date(`${publicationDate[1]}/${publicationDate[0]}/${publicationDate[2]}`);
  const resultDate = (currentDate.getTime() - dataFormat.getTime()) / (1000 * 3600 * 24);
  const image = JSON.parse(imagens);

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 450, height: 300, objectFit: "cover" }}
        image={`https://agenciadenoticias.ibge.gov.br/${image.image_fulltext}`}
        alt={titulo}
      />
      <CardContent>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography component="div" variant="h5" sx={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
            Notícia mais recente
          </Typography>
          <FavoriteButton id={id} />
        </div>
        <Typography component="div" variant="h5" sx={{ textAlign: "left" }}>
          {titulo}
        </Typography>
        <Typography variant="subtitle1" color="text.primary" sx={{ textAlign: "left" }}>
          {introducao}
        </Typography>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">{resultDate > 1 ? `${resultDate} dias atrás` : `${resultDate} dia atrás`}</Typography>
          <a href={link}>
            <button style={{ backgroundColor: "#4ef542", color: "black" }}>
              Leia a notícia aqui
            </button>
          </a>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CardLastNews;