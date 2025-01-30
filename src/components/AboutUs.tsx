import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./Dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

function FacebookIcon({ className }: { className: string }) {
  return (
    <span className={"[&>svg]:h-5 [&>svg]:w-5 " + className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 320 512"
      >
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    </span>
  );
}

function LinkedinIcon({ className }: { className: string }) {
  return (
    <span className={"[&>svg]:h-5 [&>svg]:w-5 " + className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 448 512"
      >
        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    </span>
  );
}

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Dummy Name",
      role: "Team Leader",
      description:
        "Visionary leader with 10+ years of experience in product development and team management.",
      image: `${process.env.PUBLIC_URL}/avatars/george_nabil.jpeg`,
      facebook: "https://facebook.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
    },
    {
      name: "Sarah Lee",
      role: "UX Designer",
      description:
        "Creative designer passionate about user-centered design and accessibility.",
      image: "/placeholder.svg?height=200&width=200",
      facebook: "https://facebook.com/sarahlee",
      linkedin: "https://linkedin.com/in/sarahlee",
    },
    {
      name: "Mike Chen",
      role: "Full Stack Developer",
      description:
        "Skilled developer with expertise in React, Node.js, and cloud technologies.",
      image: "/placeholder.svg?height=200&width=200",
      facebook: "https://facebook.com/mikechen",
      linkedin: "https://linkedin.com/in/mikechen",
    },
    {
      name: "Emily Taylor",
      role: "Marketing Specialist",
      description:
        "Strategic thinker with a knack for creating compelling marketing campaigns.",
      image: "/placeholder.svg?height=200&width=200",
      facebook: "https://facebook.com/emilytaylor",
      linkedin: "https://linkedin.com/in/emilytaylor",
    },
    {
      name: "David Patel",
      role: "Data Analyst",
      description:
        "Analytical expert who turns complex data into actionable insights.",
      image: "/placeholder.svg?height=200&width=200",
      facebook: "https://facebook.com/davidpatel",
      linkedin: "https://linkedin.com/in/davidpatel",
    },
  ];

  return (
    <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>About Our Team</DialogTitle>
        <DialogDescription>
          Meet the passionate individuals behind our success.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-8 mt-6">
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left sm:items-start gap-8">
          <Avatar className="w-30 h-30 sm:w-40 sm:h-40">
            <AvatarImage src={teamMembers[0].image} alt={teamMembers[0].name} />
            <AvatarFallback>
              {teamMembers[0].name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-2xl font-semibold">{teamMembers[0].name}</h3>
            <p className="text-lg text-muted-foreground">
              {teamMembers[0].role}
            </p>
            <p className="mt-2 text-sm sm:text-base">
              {teamMembers[0].description}
            </p>
            <div className="flex justify-center sm:justify-start mt-4 space-x-4">
              <a
                href={teamMembers[0].facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FacebookIcon className="w-6 h-6" />
                <span className="sr-only">
                  FacebookIcon profile of {teamMembers[0].name}
                </span>
              </a>
              <a
                href={teamMembers[0].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <LinkedinIcon className="w-6 h-6" />
                <span className="sr-only">
                  LinkedIn profile of {teamMembers[0].name}
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Avatar className="w-32 h-32">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h4 className="mt-4 text-lg font-medium">{member.name}</h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="mt-2 text-sm">{member.description}</p>
              <div className="flex mt-4 space-x-4">
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FacebookIcon className="w-5 h-5" />
                  <span className="sr-only">
                    FacebookIcon profile of {member.name}
                  </span>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="sr-only">
                    LinkedIn profile of {member.name}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DialogContent>
  );
}
