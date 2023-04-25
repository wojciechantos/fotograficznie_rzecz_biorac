// noinspection GraphQLUnresolvedReference
import React from "react";
import { Heading } from "../../../components/Typography";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { EpisodeFrame } from "../../../components/EpisodeFrame";
import { MoreButton } from "../../../components/Buttons";
import { Flex, SimpleGrid } from "@mantine/core";
import { indexPageData } from "../pageData";
import { useStyles } from "./useStyles";

// eslint-disable-next-line
export const Episodes = () => {
  const episodesMock = [
    {
      id: 6,
      title: "Hashtag Alek",
    },
    {
      id: 5,
      title: "Wojtek Grzędziński",
    },
    {
      id: 4,
      title: "Andrzej Dragan",
    },
    {
      id: 3,
      title: "Patryk Romańczuk",
    },
    {
      id: 2,
      title: "Mateusz Dąbrowski",
    },
    {
      id: 1,
      title: "Paweł Jagiełło",
    },
  ];

  const {
    episodes: { heading, watchAllButton },
  } = indexPageData;

  const {
    classes: { contentWrapper, grid, moreButtonContainer, moreButtonWrapper },
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
          {episodesMock.map((episode) => (
            <EpisodeFrame
              key={episode.id}
              caption={`#${episode.id}`}
              title={episode.title}
              moreText="Zobacz ten odcinek"
            />
          ))}
        </SimpleGrid>

        <Flex className={moreButtonContainer}>
          <Flex className={moreButtonWrapper}>
            <MoreButton variant="dark">{watchAllButton}</MoreButton>
          </Flex>
        </Flex>
      </Flex>
    </SectionWrapper>
  );
};
