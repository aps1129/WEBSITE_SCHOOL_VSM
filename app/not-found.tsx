"use client";

import { FileQuestion, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <FileQuestion className="h-10 w-10 text-primary" />
          </div>
        </div>
        
        <h1 className="text-6xl font-display font-bold text-zinc-900 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-display font-bold text-zinc-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-zinc-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 bg-zinc-200 text-zinc-900 rounded-lg font-medium hover:bg-zinc-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <p className="text-sm text-zinc-500 mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="text-sm text-primary hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-sm text-primary hover:underline">
              About Us
            </Link>
            <Link href="/academics" className="text-sm text-primary hover:underline">
              Academics
            </Link>
            <Link href="/admissions" className="text-sm text-primary hover:underline">
              Admissions
            </Link>
            <Link href="/contact" className="text-sm text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
