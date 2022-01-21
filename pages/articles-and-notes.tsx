import CategoryHeading from "../components/articlesAndNotes/CategoryHeading";
import Links from "../components/articlesAndNotes/Links";
import Layout from "../components/reusables/Layout";
import { articlesAndNotes } from "../data";

export default function Articles() {
  return (
    <Layout
      title="Articles and Notes"
      content="Articles and notes written by Andy McGunagle"
    >
      <main className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl">
          Articles and Notes
        </h1>
        {articlesAndNotes.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <CategoryHeading categoryName={category.name} />
            <ul className="flex flex-col items-center gap-4">
              <Links articlesAndNotes={category.articlesAndNotes} />
            </ul>
          </div>
        ))}
      </main>
    </Layout>
  );
};