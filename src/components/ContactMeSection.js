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
// import contactPic from "../images/erica-steeves-G_lwAp0TF38-unsplash.jpg";
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

  const width = useBreakpointValue({
    base: "100%",
    md: "calc(33.5vw + 525px)",
    sm: "90vw",
  });
  const fontSize = "calc(0.4vw + 10px)";

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      alignItems="flex-start"
      justifyContent="flex-start"
      width="100%"
      // width={width}
    >
      <Heading id="contactMe-section" as="h1" fontSize="calc(1.7vw + 10px)">
        Contact me
      </Heading>

      <Box
        rounded="md"
        w="100%"
        // display="grid"
        //  gridTemplateColumns="1fr 1fr"
      >
        {/* <Image
          borderRadius="md"
          src={contactPic}
          alt="contactPic"
          // height="100%"
          my={"auto"}
          display={{base:"none", md:"block"}}
        /> */}
        <form onSubmit={formik.handleSubmit}>
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
              />
              <FormErrorMessage fontSize={fontSize}>
                {formik.errors.email}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="type" fontSize={fontSize}>
                Type of enquiry
              </FormLabel>
              <Select id="type" name="type" fontSize={fontSize} bg="#512DA8">
                <option value="hireMe">Freelance project proposal</option>
                <option value="openSource">
                  Open source consultancy session
                </option>
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
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              colorScheme="purple"
              width="full"
              isLoading={isLoading}
              fontSize={fontSize}
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
