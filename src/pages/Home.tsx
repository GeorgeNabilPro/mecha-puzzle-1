import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { Button } from "../components/Button";
import {
  ChevronRight,
  Cog,
  Ruler,
  Pickaxe,
  CircuitBoard,
  Factory,
  Droplets,
  Laptop,
  Cylinder,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Mechanical Engineering Hub
          </h1>
          <p className="text-xl text-gray-600">
            Explore our main sections below
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Components",
              description: "Puzzle pieces that make up mechanical systems",
              icon: <Cog className="h-8 w-8" />,
              href: "/parts",
              disable: false,
            },
            {
              title: "Measuring Tools",
              description: "Discover different tools and methods for measuring",
              icon: <Ruler className="h-8 w-8" />,
              href: "/measuring-tools",
              disable: true,
            },
            {
              title: "Machine Tools",
              description: "Tools used for shaping or machining materials",
              icon: <Pickaxe className="h-8 w-8" />,
              href: "/about",
              disable: true,
            },
            {
              title: "Electronical Components",
              description:
                "Learn about the electronic components used in industrial machines",
              icon: <CircuitBoard className="h-8 w-8" />,
              href: "/electronics",
              disable: true,
            },
            {
              title: "Manufacturers",
              description:
                "A list of global and local manufacturers and their products",
              icon: <Factory className="h-8 w-8" />,
              href: "/manufacturing",
              disable: true,
            },
            {
              title: "Lubricants",
              description:
                "Different types of lubricants and their applications",
              icon: <Droplets className="h-8 w-8" />,
              href: "/fluid-mechanics",
              disable: true,
            },
            {
              title: "Engineering Software",
              description:
                "Software tools used in engineering and manufacturing",
              icon: <Laptop className="h-8 w-8" />,
              href: "/software",
              disable: true,
            },
            {
              title: "Hydraulics & Pneumatics",
              description:
                "Learn about hydraulic and pneumatic systems and components",
              icon: <Cylinder className="h-8 w-8" />,
              href: "/hydraulics",
              disable: true,
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Link to={item.href} className="w-full">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={item.disable}
                  >
                    Explore
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
