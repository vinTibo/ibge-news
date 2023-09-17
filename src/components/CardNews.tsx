import { NewsType } from "../types";

type CardNewsProps = {
  news: NewsType;
};


function CardNews({ news }: CardNewsProps) {
  const { titulo, introducao, data_publicacao, link } = news;
  const date = new Date();
  const currentDate = new Date(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
  const publicationDate = data_publicacao.split(" ")[0].split("/");
  const test = new Date(`${publicationDate[1]}/${publicationDate[0]}/${publicationDate[2]}`);
  const resultDate = (currentDate.getTime() - test.getTime()) / (1000 * 3600 * 24);

  return (
    <div>
      <h2>{titulo}</h2>
      <p>{introducao}</p>
      <p>{resultDate > 1 ? `${resultDate} dias atrás` : `${resultDate} dia atrás`}</p>
      <a href={link}>
        <button>Saiba mais</button>
      </a>
    </div>
  );
}

export default CardNews;