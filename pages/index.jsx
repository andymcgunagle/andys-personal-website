import Head from 'next/head';
import HeadingAndAvatar from '../components/HeadingAndAvatar/HeadingAndAvatar.jsx';
import Connect from '../components/ContentSections/Connect.jsx';
import MyProjects from '../components/ContentSections/MyProjects.jsx';
import Specialties from '../components/ContentSections/Specialties.jsx';

export default function Home() {
  return (
    <div className='overscroll-none'>
      <Head>
        <title>Andy McGunagle</title>
      </Head>

      <main className="min-h-screen flex flex-col justify-evenly bg-gray-900 text-gray-50 font-mono gap-4 p-6">
        <HeadingAndAvatar />
        <Specialties />
        <MyProjects />
        <Connect />
        <a href="#" className="text-center cursor-pointer">
          Check out the code for this site!
        </a>
      </main>
    </div>
  );
};