import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  {
    name: "Github",
    icon: <FaGithub />,
    path: "https://github.com/marcusvmota",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/marcus-vinicius-mota/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    path: "https://www.instagram.com/viniciusqmota/",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target='_blank'
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
