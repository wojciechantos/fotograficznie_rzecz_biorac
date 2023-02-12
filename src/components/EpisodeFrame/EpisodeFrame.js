import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Heading, Text } from "../Typography";
import { Flex } from "@mantine/core";
import { useStyles } from "./useStyles";

export const EpisodeFrame = ({ image, size }) => {
  const {
    classes: {
      frameWrapper,
      innerWrapper,
      buttonsGroupWrapper,
      episodeWrapper,
    },
  } = useStyles();

  return (
    <Flex w="100%" h={515} className={frameWrapper}>
      <StaticImage
        src="../../../static/img/indexPage/episodePhoto.png"
        alt="episode"
        style={{ position: "absolute", height: "515px" }}
      />
      <Flex p={40} className={innerWrapper}>
        <Text variant="caption" color="white">
          Najnowszy odcinek
        </Text>

        <Flex direction="column">
          <Heading level={3} color="white">
            Wiktor Franko{" "}
          </Heading>
          <Text color="white">Zobacz ten odcinek </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
