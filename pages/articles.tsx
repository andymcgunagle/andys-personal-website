import CategoryHeading from "../components/articles/CategoryHeading";
import Links from "../components/articles/Links";
import Layout from "../components/reusables/Layout";
import { articles } from "../data/articles";

export default function Articles() {
  return (
    <Layout
      title="Articles"
      content="Articles written by Andy McGunagle"
    >
      <main className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl">
          Articles
        </h1>
        {articles.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <CategoryHeading categoryName={category.name} />
            <ul className="flex flex-col items-center gap-4">
              <Links articles={category.articles} />
            </ul>
          </div>
        ))}
      </main>
    </Layout>
  );
};