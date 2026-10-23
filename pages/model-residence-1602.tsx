import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const ModelResidence1602Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the correct URL
    router.replace('/model-1602');
  }, [router]);

  return (
    <>
      <Head>
        <title>Redirecting to 1,602 sq ft Homes - Sierra at Skyeview</title>
        <meta name="description" content="Redirecting to 1,602 sq ft homes page at Sierra at Skyeview." />
        <meta httpEquiv="refresh" content="0; url=/model-1602" />
        <link rel="canonical" href="https://www.sierraskyeview.com/model-1602" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Redirecting...</h1>
          <p className="text-gray-600">Taking you to the 1,602 sq ft homes page.</p>
          <p className="text-sm text-gray-500 mt-4">
            If you are not redirected automatically, <a href="/model-1602" className="text-blue-600 hover:underline">click here</a>.
          </p>
        </div>
      </div>
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        <p>Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC</p>
      </footer>
    </>
  );
};

export default ModelResidence1602Redirect;


