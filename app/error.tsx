"use client";

import { useEffect } from "react";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-red-600" />
          </div>
        </div>
        
        <h1 className="text-4xl font-display font-bold text-zinc-900 mb-4">
          Something went wrong!
        </h1>
        
        <p className="text-lg text-zinc-600 mb-8">
          We encountered an unexpected error. Please try again or return to the homepage.
        </p>
        
        {error.message && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-zinc-200 text-zinc-900 rounded-lg font-medium hover:bg-zinc-300 transition-colors duration-200"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
