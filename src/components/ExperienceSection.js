import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const experiences = [
  {
    id: 1,
    title: "Javascript Developer",
    company: "Vlaby",
    duration: "Oct 2022 - Present",
    city: "Damietta, Egypt",
    role: "- Developing and handling Javascript apps to simulate Laboratory experiments. - Working with Adobe Animate and CreateJs library. - Preparing HTML canvas animation programs.",
  },
  {
    id: 2,
    title: "Trainee Javascript Developer",
    company: "Vlaby",
    duration: "Aug 2022 - Oct 2022",
    city: "Damietta, Egypt",
    role: "- Handling a fantastic digital scientific experiment using CreateJs.",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Mytreety",
    duration: "May 2022 - Jun 2022",
    city: "Egypt · Remote",
    role: "- Creating an e-commerce Home Page with ReactJs. - Developing Dashboards for Vendors and Charities with NextJs and Tailwind.",
  },
];

const ExperienceSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      alignItems="flex-start"
      justifyContent="flex-start"
      width="100%"
    >
      <Heading id="experience-section" as="h1" fontSize="calc(1.7vw + 10px)">
        Experience
      </Heading>
      <VStack
        display="grid"
        color={"#EDEFEE"}
        px={6}
      >
        {experiences.map((experience) => (
          <Box key={experience.id}>
            <Text fontSize="calc(1vw + 5px)" fontWeight="bold">
              <span>{experience.title},&nbsp;</span>
              {experience.company}
            </Text>
            <Text fontSize="calc(0.65vw + 5px)" fontWeight="semibold">
              {experience.duration}
            </Text>
            <Text fontSize="calc(0.6vw + 5px)" fontWeight="semibold">
              {experience.city}
            </Text>
            <Text fontSize="calc(0.6vw + 5px)">
              {experience.role.split(". ").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Text>
          </Box>
        ))}
      </VStack>
    </FullScreenSection>
  );
};

export default ExperienceSection;
