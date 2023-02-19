// noinspection GraphQLUnresolvedReference
import React from "react";
import { Heading } from "../../../components/Typography";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { PlatformButton } from "../../../components/Buttons";
import { EpisodeFrame } from "../../../components/EpisodeFrame";
import { Flex } from "@mantine/core";
import { indexPageData } from "../pageData";
import { useStyles } from "./useStyles";

// eslint-disable-next-line
export const NewestEpisode = () => {
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
    classes: { contentWrapper, buttonsWrapper, buttonsGroupWrapper },
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
            <PlatformButton link="https://open.spotify.com/show/2vHPUNoBRp4jY4jsSYriH8">
              {spotifyButton}
            </PlatformButton>
          </Flex>
          <Flex className={buttonsWrapper} gap="xl">
            <PlatformButton>{googleButton}</PlatformButton>
            <PlatformButton>{soundcloudButton}</PlatformButton>
          </Flex>
        </Flex>
        <EpisodeFrame
          caption="najnowszy odcinek"
          title="Wiktor Franko"
          moreText="Zobacz ten odcinek"
          size="fullWidth"
        />
      </Flex>
    </SectionWrapper>
  );
};
