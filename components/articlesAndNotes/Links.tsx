import { Content } from "../../data/articlesAndNotes";

export default function Links({ content }: LinksProps) {
  return (
    <>
      {content.map((item, index) => (
        <li key={index} className="px-4 py-2 rounded-full hover:bg-gray-500 text-center">
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
  content: Content[],
};
