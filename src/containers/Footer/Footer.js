import React from "react";
import { Heading, Text } from "../../components/Typography";
import youtube from "../../img/social/youtube.svg";
import instagram from "../../img/social/instagram.svg";
import at from "../../img/social/at.svg";
import facebook from "../../img/social/facebook.svg";
import { Flex } from "@mantine/core";
import { useStyles } from "./useStyles";

const Footer = () => {
  const {
    classes: {
      newsletterWrapper,
      titleWrapper,
      descriptionWrapper,
      formWrapper,
      footerWrapper,
      socialLinks,
    },
  } = useStyles();
  return (
    <>
      <Flex className={newsletterWrapper}>
        <Flex className={titleWrapper}>
          <Flex className={descriptionWrapper}>
            <Heading level={1} color="white" mb="xl">
              Bądź na bieżąco z inspiracjami
            </Heading>
            <Heading level={4} color="white">
              Zostaw mi swojego maila, a będę informował Cię o każdym nowym
              odcinku i poście na blogu.
            </Heading>
          </Flex>

          <Flex className={formWrapper}>
            <Heading level={1} color="white">
              Bądź na bieżąco z inspiracjami
            </Heading>
            <Heading level={4} color="white">
              Zostaw mi swojego maila, a będę informował Cię o każdym nowym
              odcinku i poście na blogu.
            </Heading>
          </Flex>
        </Flex>
      </Flex>
      <Flex className={footerWrapper} py={40}>
        <Flex className={socialLinks} gap={32}>
          <a
            title="youtube"
            href="https://www.youtube.com/@fotograficznierzeczbiorac"
          >
            <img
              src={youtube}
              alt="YouTube"
              style={{ width: "32px", height: "32px" }}
            />
          </a>
          <a
            title="instagram"
            href="https://www.instagram.com/explore/tags/fotograficznierzeczbiorac/?hl=en"
          >
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "32px", height: "32px" }}
            />
          </a>
          <a
            title="facebook"
            href="https://www.facebook.com/groups/fotograficznierzeczbiorac/"
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "32px", height: "32px" }}
            />
          </a>
          {/*TODO: Set propper email with mailto:*/}
          <a title="email" href="">
            <img
              src={at}
              alt="mail"
              style={{ width: "32px", height: "32px" }}
            />
          </a>
        </Flex>
        <Text variant="caption">
          © 2023 - FOTOGRAFICZNIE RZECZ BIORĄC – PODCAST I BLOG O FOTOGRAFII -
          SZYMON KASOLIK
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
