import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Display, Text } from "../../../components/Typography";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { MoreButton } from "../../../components/Buttons";
import { Flex } from "@mantine/core";
import indexPageData from "../pageData";
import useStyles from "./useStyles";

const BestOf = () => {
  const {
    bestOf: { quote, author, moreButton },
  } = indexPageData;

  const {
    classes: { sectionWrapper, backgroundWrapper, headersWrapper },
  } = useStyles();

  return (
    <SectionWrapper className={sectionWrapper}>
      <Flex className={backgroundWrapper}>
        <StaticImage
          alt="best-of-image"
          src="../../static/img/indexPage/heroImage.png"
        />
      </Flex>
      <Flex className={headersWrapper} px="md">
        <Text color="brand" mb={32} variant="caption">
          {author}
        </Text>
        <Display italic color="brand" mb={32} align="center">
          {quote}
        </Display>

        <MoreButton variant="dark">{moreButton}</MoreButton>
      </Flex>
    </SectionWrapper>
  );
};

export default BestOf;
