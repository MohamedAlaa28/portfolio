import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Textarea,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      event.preventDefault();
      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),

      comment: Yup.string().max(200, "Must be 200 characters or less"),
    }),
  });

  useEffect(() => {
    if (response?.type) {
      onOpen(response.type, response.message);
      response?.type === "success" && formik.resetForm();
    }
  }, [response]);

  // const width = useBreakpointValue({
  //   base: "100%",
  //   md: "calc(33.5vw + 525px)",
  //   sm: "90vw",
  // });
  const fontSize = "calc(0.4vw + 10px)";

  return (
    <FullScreenSection
      // isDarkBackground
      backgroundColor="#2A4365"
      alignItems="flex-start"
      justifyContent="flex-start"
      w={{ base: "100%", md: "calc(50% + 20px)" }}
      m={{ base: 0, md: "auto 0" }}
    >
      <Heading
        id="contactMe-section"
        as="h1"
        fontSize="calc(1.7vw + 10px)"
        color={"white"}
      >
        Contact me
      </Heading>

      <Box rounded="md" width="100%">
        <form
          onSubmit={formik.handleSubmit}
          style={{
            padding: "2vw",
            borderRadius: "1vw",
            backgroundColor: "#EDEFEE",
            boxShadow:
              "0px 0px 1.25vw rgba(0, 0, 0, 0.1), 0px 0px 0px 0.2vw rgba(255, 255, 255, 0.3)",
          }}
        >
          <VStack spacing={4}>
            <FormControl
              isInvalid={formik.touched.firstName && formik.errors.firstName}
            >
              <FormLabel htmlFor="firstName" fontSize={fontSize}>
                Name
              </FormLabel>
              <Input
                id="firstName"
                name="firstName"
                {...formik.getFieldProps("firstName")}
                fontSize={fontSize}
                borderColor="#2A4365"
                boxShadow="0 0 0 1px #2A4365"
                color={"white"}
              />
              <FormErrorMessage fontSize={fontSize}>
                {formik.errors.firstName}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.email && formik.errors.email}
            >
              <FormLabel htmlFor="email" fontSize={fontSize}>
                Email Address
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps("email")}
                fontSize={fontSize}
                borderColor="#2A4365"
                boxShadow="0 0 0 1px #2A4365"
              />
              <FormErrorMessage fontSize={fontSize}>
                {formik.errors.email}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="type" fontSize={fontSize}>
                Type of enquiry
              </FormLabel>
              <Select
                id="type"
                name="type"
                fontSize={fontSize}
                borderColor="#2A4365"
                boxShadow="0 0 0 1px #2A4365"
              >
                <option value="fullTime">Full time opportunity</option>
                <option value="partTime">Part time opportunity</option>
                <option value="hireMe">Freelance project</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.comment && formik.errors.comment}
            >
              <FormLabel htmlFor="comment" fontSize={fontSize}>
                Your message
              </FormLabel>
              <Textarea
                id="comment"
                name="comment"
                height={250}
                {...formik.getFieldProps("comment")}
                fontSize={fontSize}
                borderColor="#2A4365"
                boxShadow="0 0 0 1px #2A4365"
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              // colorScheme="purple"
              backgroundColor={"#2A4365"}
              color={"white"}
              width="full"
              isLoading={isLoading}
              fontSize={fontSize}
              _hover={{ backgroundColor: "#18181b" }}
              transition="background-color 0.3s ease-in-out"
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;
