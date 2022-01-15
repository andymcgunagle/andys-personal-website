export default function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col gap-2 px-4 py-2 md:py-4 rounded-lg shadow-md bg-gray-700 text-gray-50">
      {children}
    </div>
  );
};

interface CardProps { children: JSX.Element | JSX.Element[] }