import React, { useEffect, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
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
    url:"https://github.com/MohamedAlaa28/lemon-restaurant-app",
  },
  {
    id: 2,
    title: "Book Tracking App",
    description:
      "A React bookshelf app designed to manage categorized books, effectively utilizing an API for data persistence.",
    getImageSrc: () =>
      require("../images/book-tracking-screenshots/Screenshot_1.png"),
      url:"https:github.com/MohamedAlaa28/A-Book-Tracking-App",
  },
  {
    id: 3,
    title: "Food Delivery App",
    description:
      "Food delivery app with React, Tailwind CSS, and Firebase for streamlined online food ordering and delivery.",
    getImageSrc: () =>
      require("../images/food-delivery-screenshots/Screenshot_1.png"),
      url:"https://github.com/MohamedAlaa28/food-delivery-app",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      alignItems="flex-start"
    >
      <Heading
        id="projects-section"
        as="h1"
        fontSize="calc(1.7vw + 10px)"
      >
        Featured Projects
      </Heading>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 3 }}
        spacing={{ base: "4vw", sm: "3vw", md: "3vw" }}
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
