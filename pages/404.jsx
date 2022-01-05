import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 border-t-8 border-blue-500 text-center">
      <Head>
        <title>404</title>
        <meta name="description" content="Describe content here..." />
      </Head>

      <h1 className="text-8xl font-bold">
        Oh no! 404!
      </h1>
      <p className="text-2xl">
        Page not found, I'm afraid...
      </p>
      <p className="text-sm font-thin">
        Hope you have a lovely day, though 🤘
      </p>
    </div>
  );
};