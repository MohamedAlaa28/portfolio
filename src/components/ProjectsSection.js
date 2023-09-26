import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
// import { fetchRepos } from "../api/api";
const projects = [
  {
    id: 1,
    title: "Restaurant Web App",
    description:
      "Restaurant Website Containing a Home Page and A Form That Handles Table Bookings for The Restaurant.",
    getImageSrc: () =>
      require("../images/lemon-restaurant-screenshots/Screenshot_8.png"),
    url: "https://github.com/MohamedAlaa28/lemon-restaurant-app",
  },
  {
    id: 2,
    title: "Food Delivery App",
    description:
      "Food delivery app with React, Tailwind CSS, and Firebase for streamlined online food ordering and delivery.",
    getImageSrc: () =>
      require("../images/food-delivery-screenshots/Screenshot_1.png"),
    url: "https://github.com/MohamedAlaa28/food-delivery-app",
  },
  {
    id: 3,
    title: "Vendor Dashboard",
    description:
      "Vendor Dashboard: Streamlined e-commerce management, powered by React, Tailwind CSS, and Next.js.",
    getImageSrc: () => require("../images/vendor-dashboard/Screenshot_1.png"),
    url: "https://github.com/MohamedAlaa28/Vendor-Dashboard",
  },
  {
    id: 4,
    title: "Book Tracking App",
    description:
      "A React bookshelf application built to efficiently categorize and manage books with seamless API data integration.",
    getImageSrc: () =>
      require("../images/book-tracking-screenshots/Screenshot_1.png"),
    url: "https://github.com/MohamedAlaa28/A-Book-Tracking-App",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      id="projects-section"
      backgroundColor="#253C5A"
      isDarkBackground
      alignItems="flex-start"
      minHeight="calc(22.5vw + 150px)"
    >
      <Heading as="h1" fontSize="calc(1.7vw + 10px)">
        Featured Projects
      </Heading>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4 }}
        spacing={{ base: "4vw", sm: "3vw", md: "4vw" }}
        justifyContent="center"
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
