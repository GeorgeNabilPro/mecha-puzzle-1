import { Button } from "./Button";
import { Cog, Ruler, Wrench, Home } from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 bg-green-600 text-white flex items-center justify-between">
          <h1 className="text-2xl font-bold">Error 404</h1>
          <Wrench className="h-6 w-6" />
        </div>
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Cog className="h-24 w-24 text-gray-400 animate-spin-slow" />
              <Cog className="h-16 w-16 text-gray-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-reverse-slow" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mb-4">
            Blueprint Not Found
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Oops! It seems like the schematic you're looking for has been
            misplaced in our engineering archives.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <Ruler className="h-6 w-6 text-green-600" />
            <Cog className="h-6 w-6 text-green-600" />
            <Wrench className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-center">
            <a href="/">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Home className="mr-2 h-4 w-4" />
                Return to Workshop
              </Button>
            </a>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Error Code: ME-404 | Mechanical Engineering Division
          </p>
        </div>
      </div>
    </div>
  );
}
