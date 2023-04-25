// noinspection GraphQLUnresolvedReference
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Display, Heading, Text } from "../../../components/Typography";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { AppButton } from "../../../components/Buttons";
import { Flex } from "@mantine/core";
import { indexPageData } from "../pageData";
import { useMantineTheme } from "@mantine/core";
import { HeroBgFigure } from "../../../../static/img/indexPage";
import { useStyles } from "./useStyles";

// eslint-disable-next-line
export const HeroHeader = () => {
  const theme = useMantineTheme();
  const minTablet = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

  const {
    heroHeader: { display, heading, description, heroButton },
  } = indexPageData;

  const {
    classes: {
      sectionWrapper,
      bgFigure,
      heroWrapper,
      headersWrapper,
      imageMobileWrapper,
    },
  } = useStyles();

  return (
    <SectionWrapper className={sectionWrapper}>
      <HeroBgFigure className={bgFigure} />
      <Flex className={heroWrapper}>
        <Flex className={headersWrapper} px="md">
          <Display color="brand" mb={32}>
            {display}
          </Display>
          <Heading level={2} color="brand" mb={32}>
            {heading}
          </Heading>
          <Text color="brand" mb={32}>
            {description}
          </Text>
          <AppButton>{heroButton}</AppButton>
        </Flex>
        {minTablet && (
          <StaticImage
            alt="hero-image"
            src="../../static/img/indexPage/heroImage.png"
            style={{ width: "100%" }}
          />
        )}
        {!minTablet && (
          <Flex className={imageMobileWrapper}>
            <StaticImage
              alt="hero-image"
              src="../../static/img/indexPage/m_heroImage.png"
              style={{
                width: "100vw",
              }}
            />
          </Flex>
        )}
      </Flex>
    </SectionWrapper>
  );
};
