// noinspection GraphQLUnresolvedReference
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Display, Heading, Text } from "../../../components/Typography";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { AppButton } from "../../../components/Buttons";
import { Flex } from "@mantine/core";
import { indexPageData } from "../pageData";
// import { useMantineTheme } from "@mantine/core";
// import { HeroBgFigure } from "../../../../static/img/indexPage";
import { useStyles } from "./useStyles";

// eslint-disable-next-line
export const BestOf = () => {
  // const theme = useMantineTheme();
  // const minTablet = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

  const {
    bestOf: { quote, author, moreButton },
  } = indexPageData;

  const {
    classes: {
      sectionWrapper,
      backgroundWrapper,
      bgFigure,
      heroWrapper,
      headersWrapper,
      imageMobileWrapper,
    },
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

        {/*  <AppButton>{heroButton}</AppButton>*/}
      </Flex>
    </SectionWrapper>
  );
};
