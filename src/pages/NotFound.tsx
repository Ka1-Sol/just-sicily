import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="mt-6 text-3xl font-bold font-montserrat text-gray-800">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10">
          <Link 
            to="/" 
            className="bg-primary text-white font-bold py-3 px-6 rounded hover:bg-primary/90 transition-all inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
