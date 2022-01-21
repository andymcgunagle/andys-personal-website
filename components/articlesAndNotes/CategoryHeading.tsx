export default function CategoryHeading({ categoryName }: CategoryHeadingProps) {
  return (
    <h2 className="text-2xl">
      {categoryName
        .split(' ')
        .map(word => word
          .split('')
          .map((char, index) => index === 0 ? char.toUpperCase() : char)
          .join(''))
        .join(' ')}
    </h2>
  );
};

interface CategoryHeadingProps { categoryName: string };