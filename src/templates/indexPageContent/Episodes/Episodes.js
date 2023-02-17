// noinspection GraphQLUnresolvedReference
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { Heading } from "../../../components/Typography";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { PlatformButton } from "../../../components/Buttons";
import { EpisodeFrame } from "../../../components/EpisodeFrame";
import { MoreButton } from "../../../components/Buttons";

import { Flex, SimpleGrid } from "@mantine/core";
import { indexPageData } from "../pageData";
import { useMantineTheme } from "@mantine/core";
import { useStyles } from "./useStyles";

// eslint-disable-next-line
export const Episodes = () => {
  const theme = useMantineTheme();
  const minDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`);

  const {
    episodes: { heading, watchAllButton },
  } = indexPageData;

  const {
    classes: { contentWrapper, grid, moreButtonWrapper },
  } = useStyles();

  return (
    <SectionWrapper>
      <Flex className={contentWrapper} px="md" py={32}>
        <Heading level={2} color="brand" mb={32} ta="center">
          {heading}
        </Heading>

        <SimpleGrid
          className={grid}
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "lg", cols: 3, spacing: "lg" },
            { maxWidth: "md", cols: 2, spacing: "md" },
            { maxWidth: "sm", cols: 1, spacing: "md" },
          ]}
        >
          <EpisodeFrame
            caption="#119"
            title="Hashtag Alek"
            moreText="Zobacz ten odcinek"
          />
          <EpisodeFrame
            caption="#118"
            title="Wojtek Grzędziński"
            moreText="Zobacz ten odcinek"
          />
          <EpisodeFrame
            caption="#117"
            title="Andrzej Dragan"
            moreText="Zobacz ten odcinek"
          />
          <EpisodeFrame
            caption="#116"
            title="Patryk Romańczuk"
            moreText="Zobacz ten odcinek"
          />
          <EpisodeFrame
            caption="#115"
            title="Paweł Jagiełło"
            moreText="Zobacz ten odcinek"
          />
          <EpisodeFrame
            caption="#114"
            title="Krzysiek Jędrzejczak"
            moreText="Zobacz ten odcinek"
          />
        </SimpleGrid>

        <Flex className={moreButtonWrapper}>
          <MoreButton variant="dark">{watchAllButton}</MoreButton>
        </Flex>
      </Flex>
    </SectionWrapper>
  );
};
