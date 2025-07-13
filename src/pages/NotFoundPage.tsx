import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/"
              className="w-full sm:w-auto flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Go back home
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="text-6xl mb-4">🚀</div>
        <p className="text-gray-500">
          While you're here, why not explore our other pages?
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/about"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
