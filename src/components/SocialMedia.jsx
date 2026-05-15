import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function SocialMedia({ links }) {
  const iconMap = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    instagram: <FaInstagram />,
    facebook: <FaFacebookF />,
  };

  return (
    <div className="social-container">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className={`social-icon ${item.className}`}
          aria-label={item.className}
        >
          {iconMap[item.className]}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;