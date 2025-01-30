import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";

interface CardData {
  imagePath: string;
  title: string;
  description: string;
  links: Array<{ text: string; url: string }>;
}

interface CardProps extends CardData {}

function ResponsiveCard({ imagePath, title, description, links }: CardProps) {
  return (
    <Card className="flex flex-col h-full __part_card">
      <div className="relative w-ful">
        <img
          src={`${process.env.PUBLIC_URL}/assets/${imagePath}.webp`}
          alt={title}
          className="rounded-t-lg object-cover"
          onError={(e) =>
            (e.currentTarget.src = `${process.env.PUBLIC_URL}/fallback2.jpg`)
          }
        />
      </div>
      <CardHeader className="bg-green-50">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {/* <CardContent className="flex-grow bg-green-50">
        <ul className="list-disc list-inside space-y-1">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="text-blue-600 hover:underline">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </CardContent> */}
      <CardContent className="flex-grow bg-green-50 p-0"></CardContent>
    </Card>
  );
}

type ResponsiveCardGridProps = [string, string, string, string[]][];

export default function CardsGrid({
  cards,
}: {
  cards: ResponsiveCardGridProps;
}) {
  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <ResponsiveCard
            key={index}
            imagePath={card[0]}
            title={card[1]}
            description={card[2]}
            links={[]}
          />
        ))}
      </div>
    </div>
  );
}
