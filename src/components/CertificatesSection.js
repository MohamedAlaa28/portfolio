import React, { useState } from "react";
import {
  Box,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const Certificates = [
  {
    id: 1,
    title: "Front-End Developer Capstone",
    organization: "Meta",
    date: "July 2023",
    url: "https://www.coursera.org/account/accomplishments/verify/9GPY4EZSE8P3",
    projects: [
      // {
      //   id: 1,
      //   title: "Restaurant Web App",
      //   description:
      //     "Restaurant Website Containing a Home Page and A Form That Handles Table Bookings for The Restaurant.",
      //   getImageSrc: () =>
      //     require("../images/lemon-restaurant-screenshots/Screenshot_8.png"),
      //   url: "https://github.com/MohamedAlaa28/lemon-restaurant-app",
      // },
    ],
  },
  {
    id: 2,
    title: "Advanced React",
    organization: "Meta",
    date: "December 2022",
    url: "https://www.coursera.org/account/accomplishments/verify/9BHPTRLT4MVW",
  },
  {
    id: 3,
    title: "Version Control",
    organization: "Meta",
    date: "August 2023",
    url: "https://www.coursera.org/account/accomplishments/verify/WVPV49XNSMY4",
  },
  {
    id: 4,
    title: " React Development Cross-Skilling",
    organization: "Udacity",
    date: "March 2022",
    url: "https://confirm.udacity.com/GK6TQLZQ",
  },
  {
    id: 5,
    title: "Advanced Full-Stack Development",
    organization: "Udacity",
    date: "February 2022",
    url: "https://confirm.udacity.com/AW99AZ43",
  },
  {
    id: 6,
    title: "Front-End Web Development Professional",
    organization: "Udacity",
    date: "September 2021",
    url: "https://confirm.udacity.com/QN24GZ9W",
  },
];
const CertificatesSection = () => {
  const [hoveredStates, setHoveredStates] = useState(
    Certificates.map(() => false)
  );

  const handleMouseEnter = (index) => {
    const updatedStates = [...hoveredStates];
    updatedStates[index] = true;
    setHoveredStates(updatedStates);
  };

  const handleMouseLeave = (index) => {
    const updatedStates = [...hoveredStates];
    updatedStates[index] = false;
    setHoveredStates(updatedStates);
  };

  return (
    <FullScreenSection
      backgroundColor="#253C5A"
      isDarkBackground
      alignItems="flex-start"
      justifyContent="flex-start"
      width="100%"
    >
      <Heading id="certificates-section" as="h1" fontSize="calc(1.7vw + 10px)">
        Certificates
      </Heading>
      <VStack display="grid" px={6}>
        {Certificates.map((Certificate, index) => (
          <Box
            key={Certificate.id}
            borderBottom={index !== Certificates.length - 1 ? "1px" : "none"}
            pb={3}
          >
            <Text fontSize="calc(1vw + 5px)" fontWeight="bold">
              {Certificate.title} &nbsp;&nbsp;
              <span
                style={{ fontSize: "calc(0.6vw + 5px)", fontWeight: "normal" }}
              >
                {Certificate.date}
              </span>
            </Text>
            <Text fontSize="calc(0.6vw + 5px)">{Certificate.organization}</Text>
            <Link
              href={Certificate.url}
              target="_blank"
              _hover={{ textDecoration: "none" }}
            >
              <HStack
                fontSize="calc(0.65vw + 5px)"
                fontWeight="500"
                align="center"
                cursor="pointer"
                color={hoveredStates[index] ? "#697b93" : undefined}
                transition="color 0.3s ease-in-out"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Text
                  marginRight={hoveredStates[index] ? "1.5rem" : "0.5rem"}
                  transition="margin-right 0.3s ease-in-out"
                >
                  See the certificate
                </Text>
                <FontAwesomeIcon icon={faArrowRight} />
              </HStack>
            </Link>
            {Certificate.projects && Certificate.projects.length > 0 && (
              <Text py={3} fontSize="calc(1vw + 5px)" fontWeight={"semibold"}>
                Projects
              </Text>
            )}
            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4 }}
              spacing={{ base: "4vw", sm: "3vw", md: "4vw" }}
            >
              {Certificate.projects &&
                Certificate.projects.length > 0 &&
                Certificate.projects.map((project) => (
                  <Card
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.getImageSrc()}
                    url={project.url}
                    // pb={6}
                  />
                ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>
    </FullScreenSection>
  );
};

export default CertificatesSection;
