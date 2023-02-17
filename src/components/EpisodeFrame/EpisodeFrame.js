import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Heading, Text } from "../Typography";
import { MoreButton } from "../Buttons";
import { Flex } from "@mantine/core";
import { useStyles } from "./useStyles";
import { Link } from "gatsby";

export const EpisodeFrame = ({
  image,
  size,
  link,
  caption,
  title,
  moreText,
}) => {
  const {
    classes: { fullFrameWrapper, frameWrapper, innerWrapper },
  } = useStyles();

  return (
    <Flex className={size === "fullWidth" ? fullFrameWrapper : frameWrapper}>
      <Link to={link} style={{ width: "100%" }}>
        <StaticImage
          src="../../../static/img/indexPage/episodePhoto.png"
          alt="episode"
        />

        <Flex className={innerWrapper}>
          <Text variant="caption" color="white">
            {caption}
          </Text>

          <Flex direction="column">
            <Heading level={3} color="white" pb="xs">
              {title}
            </Heading>
            <MoreButton>{moreText}</MoreButton>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
};
