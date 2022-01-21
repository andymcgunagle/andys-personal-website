import { TitleAndLink } from "../../data/articles";

export default function Links({ articles }: LinksProps) {
  return (
    <>
      {articles.map((article, index) => (
        <li key={index}>
          <a
            key={index}
            href={article.link}
            rel="noopener noreferrer"
            target="_blank"
            className="font-thin"
          >
            {article.title}
          </a>
        </li>
      ))}
    </>
  );
};

interface LinksProps {
  articles: TitleAndLink[],
};
