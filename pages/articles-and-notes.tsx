import CategoryHeading from "../components/articlesAndNotes/CategoryHeading";
import Links from "../components/articlesAndNotes/Links";
import Heading from "../components/_reusables/Heading";
import Layout from "../components/_reusables/Layout";
import { articlesAndNotes } from "../data";

export default function Articles() {
  return (
    <Layout
      title="Articles and Notes"
      content="Articles and notes written by Andy McGunagle"
    >
      <main className="flex flex-col justify-center items-center gap-10">
        <Heading>
          Articles & Notes
        </Heading>
        {articlesAndNotes.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <CategoryHeading categoryName={category.name} />
            <ul className="flex flex-col items-center gap-4">
              <Links content={category.content} />
            </ul>
          </div>
        ))}
      </main>
    </Layout>
  );
};