import React from "react";
import { Heading, Text } from "../../components/Typography";
import youtubeIcon from "../../img/social/youtube.svg";
import instagramIcon from "../../img/social/instagram.svg";
import facebookIcon from "../../img/social/facebook.svg";
import atIcon from "../../img/social/at.svg";
import { Flex } from "@mantine/core";
import { useStyles } from "./useStyles";
import { footerData } from "./footerData";

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

  const { title, subtitle, youtube, instagram, facebook, email, copyrights } =
    footerData;

  return (
    <>
      <Flex className={newsletterWrapper}>
        <Flex className={titleWrapper}>
          <Flex className={descriptionWrapper}>
            <Heading level={1} color="white" mb="xl">
              {title}
            </Heading>
            <Heading level={4} color="white">
              {subtitle}
            </Heading>
          </Flex>

          <Flex className={formWrapper}>
            {/*TODO: Ultimately provide a newsletter form*/}
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
          <a title={youtube.title} href={youtube.link}>
            <img
              src={youtubeIcon}
              alt="YouTube"
              style={{ width: "32px", height: "32px" }}
            />
          </a>
          <a title={instagram.title} href={instagram.link}>
            <img
              src={instagramIcon}
              alt="Instagram"
              style={{ width: "32px", height: "32px" }}
            />
          </a>
          <a title={facebook.title} href={facebook.link}>
            <img
              src={facebookIcon}
              alt="Facebook"
              style={{ width: "32px", height: "32px" }}
            />
          </a>
          <a title={email.title} href={email.link}>
            <img
              src={atIcon}
              alt="mail"
              style={{ width: "32px", height: "32px" }}
            />
          </a>
        </Flex>
        <Text variant="caption">{copyrights}</Text>
      </Flex>
    </>
  );
};

export default Footer;
