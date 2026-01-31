import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const footerSocialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/mujahid.shikdar.2024/",
  },
  {
    name: "Instagram",
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/mujaehidshikder?igsh=b3oyZGJpa3hnZDl2/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mujahid-hoshen-937066376/",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/",
  },
];

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-gray-800 text-white mt-10">
        <div className="flex flex-col md:flex-row md:justify-between w-full px-4">
          <Link to="/">
            <img
              src="/logo.png"
              alt="App Store Logo"
              className="w-10 h-10 mx-auto md:mx-0 mb-4 md:mb-0 cursor-pointer"
            />
          </Link>

          <div className="text-center">
            <p className="text-center font-semibold text-lg">Social Links</p>
            {
              <nav className="flex gap-4 justify-center md:justify-between items-center mt-2">
                {footerSocialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl mt-2"
                  >
                    {social.icon}
                  </a>
                ))}
              </nav>
            }
          </div>
        </div>
        <div className="text-center m-2">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            <Link to="https://www.linkedin.com/in/ms-hossen/" target="_blank">
              {" "}
              <b> MS Hossen</b>
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
