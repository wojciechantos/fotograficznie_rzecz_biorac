import React from "react";
import { useContactStyles } from "./useStyles";
import { Box, Flex } from "@mantine/core";
import { Heading, Text } from "../../components/Typography";
import contactPageData from "../../pages/ContactPageContent/pageData";
import PropTypes from "prop-types";

export const ContactSection = ({ children }) => {
  const { header, text1, text2, text3, text4 } = contactPageData;

  const {
    classes: { sectionWrapper, descriptionWrapper, formWrapper },
  } = useContactStyles();

  return (
    <Flex className={sectionWrapper}>
      <Flex className={descriptionWrapper}>
        <Heading level={1} color="dark" mb="xl" align="center">
          {header}
        </Heading>

        <TextItem text={text1} />
        <TextItem text={text2} />
        <TextItem text={text3} />
        <TextItem text={text4} />
      </Flex>

      <Box className={formWrapper}>{children}</Box>
    </Flex>
  );
};

const TextItem = ({ text }) => (
  <Text w="100%" align="center">
    {text}
  </Text>
);
ContactSection.propTypes = {
  children: PropTypes.node.isRequired,
};
