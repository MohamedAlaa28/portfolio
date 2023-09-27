import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const form = useRef();
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      from_name: "",
      user_email: "",
      type: "",
      message: "",
    },

    onSubmit: async (values) => {
      emailjs
        .sendForm(
          "service_v13u6jn",
          "template_i80ongn",
          form.current,
          "4GUIwP7zgoMVHGwDM"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      submit("", values);
    },

    validationSchema: Yup.object({
      from_name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      message: Yup.string().max(200, "Must be 200 characters or less"),
    }),
  });

  useEffect(() => {
    if (response?.type) {
      onOpen(response.type, response.message);
      response?.type === "success" && formik.resetForm();
    }
  }, [response]);

  const fontSize = "calc(0.4vw + 10px)";

  return (
    <FullScreenSection
      id="contactMe-section"
      backgroundColor="#2A4365"
      alignItems="flex-start"
      justifyContent="flex-start"
      w={{ base: "100%", md: "calc(50% + 20px)" }}
      m={{ base: 0, md: "auto 0" }}
    >
      <Heading as="h1" fontSize="calc(1.7vw + 10px)" color={"white"}>
        Contact me
      </Heading>

      <Box rounded="md" width="100%">
        <form
          ref={form}
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
              isInvalid={formik.touched.from_name && formik.errors.from_name}
            >
              <FormLabel htmlFor="from_name" fontSize={fontSize}>
                Name
              </FormLabel>
              <Input
                id="from_name"
                name="from_name"
                {...formik.getFieldProps("from_name")}
                fontSize={fontSize}
                borderColor="#2A4365"
                boxShadow="0 0 0 1px #2A4365"
              />
              <FormErrorMessage fontSize={fontSize}>
                {formik.errors.from_name}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.user_email && formik.errors.user_email}
            >
              <FormLabel htmlFor="user_email" fontSize={fontSize}>
                Email Address
              </FormLabel>
              <Input
                id="user_email"
                name="user_email"
                type="email"
                {...formik.getFieldProps("user_email")}
                fontSize={fontSize}
                borderColor="#2A4365"
                boxShadow="0 0 0 1px #2A4365"
              />
              <FormErrorMessage fontSize={fontSize}>
                {formik.errors.user_email}
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
                <option value="">--Please choose an option----</option>
                <option value="fullTime">Full time opportunity</option>
                <option value="partTime">Part time opportunity</option>
                <option value="Freelance">Freelance project</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.message && formik.errors.message}
            >
              <FormLabel htmlFor="message" fontSize={fontSize}>
                Your message
              </FormLabel>
              <Textarea
                id="message"
                name="message"
                height={250}
                {...formik.getFieldProps("message")}
                fontSize={fontSize}
                borderColor="#2A4365"
                boxShadow="0 0 0 1px #2A4365"
              />
              <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
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
