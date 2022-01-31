export default function Heading({ children = "Andy McGunagle" }: HeadingProps) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold whitespace-nowrap text-center">
      {children}
    </h1>
  );
};

interface HeadingProps {
  children?: string,
};