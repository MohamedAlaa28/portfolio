import { Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Card = ({ title, description, imageSrc, url }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  return (
    <VStack
      display="grid"
      alignItems="flex-start"
      // gridTemplateRows="4fr 5fr"
      borderRadius="1vw"
      backgroundColor="#EDEFEE"
      boxShadow={
        isCardHovered
          ? "0px 0px 0.85vw rgba(255, 255, 255, 0.3), 0px 0px 0px 0.2vw rgba(255, 255, 255, 0.3)"
          : "0px 0px 1.25vw rgba(0, 0, 0, 0.1), 0px 0px 0px 0.2vw rgba(255, 255, 255, 0.3)"
      }
      transition="box-shadow 0.3s ease-in-out"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <Image
        borderTopLeftRadius="1vw"
        borderTopRightRadius="1vw"
        src={imageSrc}
        alt={title}
        width="100%"
        // height="100%"
      />
      <VStack
        display="grid"
        // gridTemplateRows="2fr 5fr 2fr"
        gridTemplateRows={{ base: "1fr 4fr 2fr", sm: "1fr 3fr 2fr", md: "1fr 4fr 2fr" }}
        borderRadius="md"
        boxShadow="md"
        p="1.25vw"
        spacing={4}
        height="100%"
      >
        <Heading as="h3" size="md">
          <Text
            color={"blackAlpha.900"}
            fontSize="calc(1vw + 5px)"
            whiteSpace= "nowrap"
          >
            {title}
          </Text>
        </Heading>
        <Text
          color={"#2E5341"}
          fontSize="calc(0.6vw + 5px)"
          alignItems="flex-start"
        >
          {description}
        </Text>
        <Link href={url} target="_blank" _hover={{ textDecoration: "none" }}>
          <HStack
            fontSize="calc(0.65vw + 5px)"
            fontWeight="500"
            align="center"
            cursor="pointer"
            marginBottom="8px"
            color={isArrowHovered ? "#2E5341" : "black"}
            transition="color 0.3s ease-in-out"
            onMouseEnter={() => setIsArrowHovered(true)}
            onMouseLeave={() => setIsArrowHovered(false)}
          >
            <Text
              marginRight={isArrowHovered ? "1.5rem" : "0.5rem"}
              transition="margin-right 0.3s ease-in-out"
            >
              See more
            </Text>
            <FontAwesomeIcon icon={faArrowRight} />
          </HStack>
        </Link>
      </VStack>
    </VStack>
  );
};

export default Card;
