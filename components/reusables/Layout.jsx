import Head from 'next/head';

import MobileMainNav from "./MainNav/MobileMainNav.jsx";
import LargeLayoutMainNav from "./MainNav/LargeLayoutMainNav.jsx";

export default function Layout({
  additionalInnerStyles,
  additionalOuterStyles,
  children,
  content,
  title,
}) {
  return (
    <div className={`min-h-screen ${additionalOuterStyles}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <div className={`flex flex-col gap-4 p-8 border-t-8 border-blue-500 ${additionalInnerStyles}`}>
        {children}
      </div>
      <MobileMainNav />
      <LargeLayoutMainNav />
    </div>
  );
};