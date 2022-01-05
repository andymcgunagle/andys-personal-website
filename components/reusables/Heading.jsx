export default function Heading({ text = "Andy McGunagle" }) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold whitespace-nowrap text-center">
      {text}
    </h1>
  );
};