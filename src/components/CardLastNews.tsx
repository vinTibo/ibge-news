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
  const test = new Date(`${publicationDate[1]}/${publicationDate[0]}/${publicationDate[2]}`);
  const resultDate = (currentDate.getTime() - test.getTime()) / (1000 * 3600 * 24);
  const image = JSON.parse(imagens);

  return (
    <div>
      <p>Última notícia</p>
      <img src={`https://agenciadenoticias.ibge.gov.br/${image.image_fulltext}`} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{introducao}</p>
      <p>{resultDate > 1 ? `${resultDate} dias atrás` : `${resultDate} dia atrás`}</p>
      <a href={link}>
        <button>Saiba mais</button>
      </a>
      <FavoriteButton id={id} />
    </div>
  );
}

export default CardLastNews;