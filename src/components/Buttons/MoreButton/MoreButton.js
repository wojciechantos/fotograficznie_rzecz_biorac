import React from "react";
import { UnstyledButton, createStyles } from "@mantine/core";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { ChildrenType } from "../../Types";
import { ArrowIcon } from "./ArrowIcon";

const useStyles = createStyles((theme, _params, getRef) => ({
  icon: {
    ref: getRef("icon"),
    width: "25px",
    height: "15px",
    marginLeft: theme.spacing.md,
    transition: "all 0.3s",
    overflow: "hidden",
    transform: "scale(1, 1)",
  },

  more: {
    ref: getRef("more"),
    zIndex: 1,
    fontFamily: "Helvetica",
    fontSize: "18px",
    lineHeight: "21px",
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:hover": {
      paddingLeft: theme.spacing.md,
      [`.${getRef("icon")}`]: {
        transform: "scale(1.25, 1)",
      },
    },
  },

  white: {
    color: "white",
    svg: {
      path: {
        fill: "white",
      },
    },
  },

  dark: {
    color: theme.colors.violet[2],
    svg: {
      path: {
        fill: theme.colors.violet[2],
      },
    },
  },
}));

export const MoreButton = ({ children, link, variant, ...rest }) => {
  const { classes, cx } = useStyles();

  return (
    <Link to={link}>
      <UnstyledButton className={cx(classes.more, classes[variant])} {...rest}>
        {children}
        <ArrowIcon className={classes.icon} />
      </UnstyledButton>
    </Link>
  );
};

MoreButton.propTypes = {
  children: ChildrenType,
  link: ChildrenType,
  variant: PropTypes.oneOf(["white", "dark"]),
};

MoreButton.defaultProps = {
  children: "",
  link: "",
  variant: "white",
};
