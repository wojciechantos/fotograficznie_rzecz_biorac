import React from "react";
import { Heading } from "../../../components/Typography";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { EpisodeFrame } from "../../../components/EpisodeFrame";
import { MoreButton } from "../../../components/Buttons";
import { Flex, SimpleGrid } from "@mantine/core";
import { indexPageData } from "../pageData";
import { useStyles } from "./useStyles";

export const Blog = () => {
  const blogsMock = [
    {
      id: 3,
      title: "Długi czas naświetlania - co musisz wiedzieć",
    },
    {
      id: 2,
      title: "Checklista - co zabrać na fotografowanie w górach",
    },
    {
      id: 1,
      title: "Spacer po lesie w zwyczajny dzień",
    },
  ];

  const {
    blog: { heading, watchAllButton, moreButtonLabel },
  } = indexPageData;

  const {
    classes: { contentWrapper, grid, moreButtonContainer, moreButtonWrapper },
  } = useStyles();

  return (
    <SectionWrapper>
      <Flex className={contentWrapper} px="md" py={64}>
        <Heading level={2} color="brand" mb={56} ta="center">
          {heading}
        </Heading>

        <SimpleGrid
          className={grid}
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "lg", cols: 3, spacing: "lg" },
            { maxWidth: "sm", cols: 1, spacing: "md" },
          ]}
        >
          {blogsMock.map((episode) => (
            <EpisodeFrame
              key={episode.id}
              title={episode.title}
              moreText={moreButtonLabel}
              withBlogFrame
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
