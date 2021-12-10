import ContentSectionItem from './ContentSectionItem.jsx';

export default function ContentSection({ heading, items }) {
  return (
    <section className="flex flex-col gap-4 p-2">
      <h3 className="text-center">
        {heading}
      </h3>

      <div className="flex justify-center items-center flex-wrap gap-4">
        {items.map((item) => <ContentSectionItem key={item.name} src={item.src} alt={item.name} url={item.url} />)}
      </div>
    </section>
  );
};