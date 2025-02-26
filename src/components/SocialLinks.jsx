import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi"; // Mail icon from Heroicons

export default function SocialLinks() {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub className="h-6 w-6" />,
      url: "https://github.com/mayankraj052",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/mayankraj052/",
    },
    {
      name: "X",
      icon: <FaXTwitter className="h-6 w-6" />,
      url: "https://x.com/mayankraj2511",
    },
    {
      name: "Email",
      icon: <HiMail className="h-6 w-6" />,
      url: "mailto:mayankrajsingh7646@gmail.com",
    },
  ];

  return (
    <div className="flex justify-center space-x-6">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
