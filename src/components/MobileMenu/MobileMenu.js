import React from "react";
import { Drawer, Button, Flex, Box } from "@mantine/core";
import logo from "../../img/logo.png";
import { Search, X } from "react-feather";
import theme from "../themeConfig";
import { Link } from "gatsby";
import { Display } from "../Typography";
import { useMenuStyles } from "./useMenuStyles";

const buttonBaseStyles = {
  root: { padding: 0 },
};

export const MobileMenu = ({ isOpened, onClose }) => {
  const { classes } = useMenuStyles();

  const menu = (
    <>
      <Link className={classes.link} to="/about">
        <Display italic align="center">
          Szymon
        </Display>
      </Link>
      <Link className={classes.link} to="/about">
        <Display italic align="center">
          Podcasty
        </Display>
      </Link>
      <Link className={classes.link} to="/about">
        <Display italic align="center">
          Blog
        </Display>
      </Link>
      <Link className={classes.link} to="/about">
        <Display italic align="center">
          Kontakt
        </Display>
      </Link>
    </>
  );

  return (
    <Drawer
      opened={isOpened}
      onClose={onClose}
      zIndex={1500}
      size="100%"
      position="right"
      withCloseButton={false}
      transitionDuration={400}
      classNames={{
        root: classes.root,
        body: classes.body,
        drawer: classes.drawer,
      }}
    >
      <Flex justify="center">
        <Box className={classes.logo}>
          <img
            src={logo}
            alt="Fotograficznie-Rzecz-Biorąc"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Flex>

      <Flex direction="row" justify="space-between">
        <Button size="md" styles={buttonBaseStyles}>
          <Search color={theme.colors.violet[1]} />
        </Button>
        <Button size="md" onClick={onClose} styles={buttonBaseStyles}>
          <X color={theme.colors.black[3]} />
        </Button>
      </Flex>
      <Flex className={classes.links}>{menu}</Flex>
    </Drawer>
  );
};
