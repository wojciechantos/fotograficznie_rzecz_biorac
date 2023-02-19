import React from "react";
import { Header, Button, Group, Container, Box } from "@mantine/core";
import { useNavbarStyles } from "./useNavbarStyles";
import { Link } from "../Link";
import logo from "../../img/logo.png";
import { Menu, Search } from "react-feather";
import { Text } from "../Typography";
import PropTypes from "prop-types";
import { useWindowScroll } from "@mantine/hooks";

export const Navbar = ({ onBurgerClick }) => {
  const [scroll] = useWindowScroll();

  const { classes } = useNavbarStyles(scroll.y);

  const menu = (
    <>
      <Link className={classes.link} to="/about">
        <Text variant="button">Szymon</Text>
      </Link>
      <Link className={classes.link} to="/about">
        <Text variant="button">Podcasty</Text>
      </Link>
      <Link className={classes.link} to="/about">
        <Text variant="button">Blog</Text>
      </Link>
      <Link className={classes.link} to="/about">
        <Text variant="button">Kontakt</Text>
      </Link>
      <Link className={classes.link} to="/">
        <Search />
      </Link>
    </>
  );

  return (
    <>
      <Header
        withBorder={false}
        className={classes.root}
        py="md"
        bg={scroll.y === 0 ? "transparent" : "backgroundColor.0"}
      >
        <Container className={classes.header} size="xl" px="md">
          <Box component={Link} to="/" title="Logo" className={classes.logo}>
            <img
              src={logo}
              alt="Fotograficznie-Rzecz-Biorąc"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Button onClick={onBurgerClick} className={classes.burger} size="sm">
            <Menu />
          </Button>
          <Group className={classes.links}>{menu}</Group>
        </Container>
      </Header>
    </>
  );
};

Navbar.propTypes = {
  onBurgerClick: PropTypes.func,
};

Navbar.defaultProps = {
  onBurgerClick: () => {},
};
