// noinspection GraphQLUnresolvedReference
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { Heading } from "../../../components/Typography";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { PlatformButton } from "../../../components/Buttons";
import { EpisodeFrame } from "../../../components/EpisodeFrame";
import { Flex } from "@mantine/core";
import { indexPageData } from "../pageData";
import { useMantineTheme } from "@mantine/core";
import { useStyles } from "./useStyles";

// eslint-disable-next-line
export const NewestEpisode = () => {
  const theme = useMantineTheme();
  const minDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`);

  const {
    newestEpisode: {
      heading,
      appleButton,
      spotifyButton,
      googleButton,
      soundcloudButton,
    },
  } = indexPageData;

  const {
    classes: {
      contentWrapper,
      buttonsWrapper,
      buttonsGroupWrapper,
      episodeWrapper,
    },
  } = useStyles();

  return (
    <SectionWrapper>
      <Flex className={contentWrapper} px="md" py={32}>
        <Heading level={2} color="brand" mb={32} ta="center">
          {heading}
        </Heading>
        <Flex className={buttonsGroupWrapper} gap="xl" mb={96}>
          <Flex className={buttonsWrapper} gap="xl">
            <PlatformButton>{appleButton}</PlatformButton>
            <PlatformButton>{spotifyButton}</PlatformButton>
          </Flex>
          <Flex className={buttonsWrapper} gap="xl">
            <PlatformButton>{googleButton}</PlatformButton>
            <PlatformButton>{soundcloudButton}</PlatformButton>
          </Flex>
        </Flex>
        <EpisodeFrame />
      </Flex>
    </SectionWrapper>
  );
};
