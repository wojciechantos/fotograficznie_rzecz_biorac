import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Heading, Text } from "../Typography";
import { MoreButton } from "../Buttons";
import { Flex } from "@mantine/core";
import { useStyles } from "./useStyles";

export const EpisodeFrame = ({
  image,
  withBlogFrame,
  size,
  link,
  caption,
  title,
  moreText,
}) => {
  const {
    classes: { fullFrameWrapper, frameWrapper, innerWrapper, blogFrame },
    cx,
  } = useStyles();

  return (
    <Flex
      className={cx(size === "fullWidth" ? fullFrameWrapper : frameWrapper, {
        [blogFrame]: withBlogFrame === true,
      })}
    >
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
    </Flex>
  );
};
