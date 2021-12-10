import Image from 'next/image';

function Logo({ src, alt, additionalStyles }) {
  return (
    <div className={`p-6 bg-gray-600 rounded-full hover:-translate-y-1 hover:bg-gray-500 select-none ${additionalStyles}`}>
      <div className="h-14 w-14 relative">
        <Image
          alt={`${alt} logo`}
          layout="fill"
          objectFit="contain"
          src={src}
        />
      </div>
    </div>
  );
};

export default function ContentSectionItem({ src, alt, url }) {

  if (url) {
    return (
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Logo
          src={src}
          alt={alt}
          additionalStyles="active:translate-y-1 border-2 border-blue-500"
        />
      </a>
    );
  };

  return <Logo src={src} alt={alt} />;
};