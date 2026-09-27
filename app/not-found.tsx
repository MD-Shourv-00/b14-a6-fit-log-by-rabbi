import Link from 'next/link';

const NotFound = () => {
    return (
      <main className="min-h-screen bg-(--primary-background) text-(--primary-text-color) flex items-center justify-center">
        <div className="text-center">
          <p className="text-lime-400 text-lg font-semibold">
            404
          </p>

          <h1 className="text-6xl font-bold mt-3">
            Page Not Found
          </h1>

          <p className="text-(--secondary-text-color) mt-4">
            Sorry, the page you are looking for does not
            exist.
          </p>

          <Link
            href="/"
            className="inline-block mt-8 px-5 py-3 bg-lime-400 text-(--primary-background) rounded-lg font-semibold hover:bg-lime-300">
            Go Back Home
          </Link>
        </div>
      </main>
    );
};

export default NotFound;