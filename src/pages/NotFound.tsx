
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-soil-100 to-soil-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-soil-900">404</h1>
          <p className="text-xl text-soil-700 mb-4">Oops! Page not found</p>
          <a href="/" className="text-soil-500 hover:text-soil-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
