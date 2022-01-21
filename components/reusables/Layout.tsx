import Head from 'next/head';

import MobileMainNav from "./MainNav/MobileMainNav";
import LargeLayoutMainNav from "./MainNav/LargeLayoutMainNav";

export default function Layout({
  additionalInnerStyles,
  additionalOuterStyles,
  children,
  content,
  title,
}: LayoutProps) {
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

interface LayoutProps {
  additionalInnerStyles?: string,
  additionalOuterStyles?: string,
  children: JSX.Element[] | JSX.Element,
  content: string,
  title: string,
};