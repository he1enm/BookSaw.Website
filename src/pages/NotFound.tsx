import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdfcf7] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="text-red-500 w-16 h-16" />
        </div>

        <h1 className="text-6xl font-bold text-[#3a3a3a] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
          Go back to the homepage and continue exploring!
        </p>

        <Link
          to="/"
          className="inline-block bg-[#b99272] hover:bg-[#a98263] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform active:scale-95"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
