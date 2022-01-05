import ContentSection from "./ContentSection.jsx";
import Card from "./Card.jsx";

export default function Education() {
  return (
    <ContentSection icon="school" title="Education">
      <Card>
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-bold">
              California Polytechnic State University - San Luis Obispo
            </h2>
            <p className="text-xs text-center text-gray-300">
              Class of 2013
            </p>
          </div>
          <p className="text-sm text-gray-300">
            Bachelor of Science in Kinesiology
          </p>
        </div>
      </Card>
    </ContentSection>
  );
};