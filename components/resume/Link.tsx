export default function Link({ href, styles, children }: LinkProps) {
  return (
    <a
      className={`${styles} cursor-pointer`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

interface LinkProps {
  href: string,
  styles: string,
  children: string,
};