export default function Heading({ text = "Andy McGunagle" }: HeadingProps) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold whitespace-nowrap text-center">
      {text}
    </h1>
  );
};

interface HeadingProps {
  text?: string,
};