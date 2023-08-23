import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import PersonalPic from "../images/Me.png";

const greeting = "Hello, I am Mohamed Alaa!";
const bio1 = "A frontend developer";
const bio2 = "JavaScript Developer in Vlaby";
// const avatarUrl = "https://i.pravatar.cc/150?img=7";
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    minHeight="calc(37.5vw + 200px)"
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size={["md", "lg", "xl", "2xl"]} // Adjust these sizes based on the needs
        name="PersonalPic"
        src={PersonalPic}
        style={{
          maxWidth: "100%",
          width: "auto",
        }}
      />
      <Text fontSize="calc(0.7vw + 5px)">{greeting}</Text>
      <Heading fontSize="calc(1.7vw + 10px)">{bio1}</Heading>
      <Heading fontSize="calc(1.7vw + 10px)">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
