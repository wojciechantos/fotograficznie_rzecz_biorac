import React from "react";
import { Drawer, Button, Flex, Title } from "@mantine/core";
import logo from "../img/logo.png";
import { Search, X } from "react-feather";
import theme from "./themeConfig";
import { Link } from "gatsby";

const buttonBaseStyles = {
  root: { padding: 0 },
};

const MobileMenu = ({ isOpened, onClose, children }) => {
  return (
    <Drawer
      opened={isOpened}
      // opened
      onClose={onClose}
      zIndex={1500}
      size="100%"
      position="right"
      withCloseButton={false}
      padding="md"
    >
      <Flex justify="center">
        <img
          src={logo}
          alt="Fotograficznie-Rzecz-Biorąc"
          style={{
            width: "64px",
            height: "50px",
          }}
        />
      </Flex>

      <Flex direction="row" justify="space-between">
        <Button size="md" styles={buttonBaseStyles}>
          <Search color={theme.colors.violet[1]} />
        </Button>
        <Button size="md" onClick={onClose} styles={buttonBaseStyles}>
          <X color={theme.colors.black[3]} />
        </Button>
      </Flex>
      <Title order={2} align="center">
        <Link className="navbar-item" to="/about" onClick={onClose}>
          About
        </Link>
      </Title>
    </Drawer>
  );
};

export default MobileMenu;
