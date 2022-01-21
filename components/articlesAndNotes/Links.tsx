import { TitleAndLink } from "../../data/articlesAndNotes";

export default function Links({ articlesAndNotes }: LinksProps) {
  return (
    <>
      {articlesAndNotes.map((item, index) => (
        <li key={index}>
          <a
            key={index}
            href={item.link}
            rel="noopener noreferrer"
            target="_blank"
            className="font-thin"
          >
            {item.title}
          </a>
        </li>
      ))}
    </>
  );
};

interface LinksProps {
  articlesAndNotes: TitleAndLink[],
};
