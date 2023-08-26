import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: mohamed.alaa.elhefny@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/MohamedAlaa28",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/mohamed-alaa-b180625/",
  },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/20994901/mohamed-alaa",
  },
];

const Header = () => {
  const boxRef = useRef(null);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    const boxElement = boxRef.current;
    if (currentScrollPos > prevScrollPos.current) {
      boxElement.style.transform = "translateY(-200px)";
    } else {
      boxElement.style.transform = "translateY(0)";
    }
    prevScrollPos.current = currentScrollPos;
  };
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={boxRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      transition="transform 0.3s ease-out"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          p={6}
          height={16}
          justifyContent="space-between"
          alignItems="center"
          fontSize="calc(0.7vw + 5px)"
        >
          <nav>
            <HStack spacing={"calc(1.7vw + 5px)"}>
              {socials.map((item, index) => (
                <Link href={item.url} key={index} target="_blank">
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={"calc(1.7vw + 5px)"}>
              <Link
                href="/#projects"
                onClick={handleClick("projects")}
                style={{ textDecoration: "none" }}
              >
                Projects
              </Link>
              <Link
                href="/#experience"
                onClick={handleClick("experience")}
                style={{ textDecoration: "none" }}
              >
                Experience
              </Link>
              <Link
                href="/#certificates"
                onClick={handleClick("certificates")}
                style={{ textDecoration: "none" }}
              >
                Certificates
              </Link>
              <Link
                href="/#contactMe"
                onClick={handleClick("contactMe")}
                style={{ textDecoration: "none" }}
              >
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
