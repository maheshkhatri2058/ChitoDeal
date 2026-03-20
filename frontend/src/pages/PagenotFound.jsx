import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-400">404</p>

        <h1 className="mt-4 text-5xl font-semibold text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg text-gray-400 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* ✅ Go Home */}
          <Link
            to="/"
            className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Go back home
          </Link>
          {/* ✅ Contact */}
          <Link to="/contact" className="text-sm font-semibold text-white">
            Contact support →
          </Link>
        </div>
      </div>
    </main>
  );
}
