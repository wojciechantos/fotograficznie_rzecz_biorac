import React from "react";
import { UnstyledButton, createStyles } from "@mantine/core";
import { useButtonBaseStyles } from "../useButtonBaseStyles";
import PropTypes from "prop-types";
import { ChildrenType } from "../../Types";

const useStyles = createStyles((theme) => ({
  platform: {
    padding: `${theme.spacing.xl}px ${theme.spacing.sm}px`,

    backgroundColor: theme.black,
    color: "white",
    border: `1px solid ${theme.black}`,
    transition: "all 0.3s",
    overflow: "hidden",
    width: "170px",

    [theme.fn.largerThan("md")]: {
      padding: `${theme.spacing.xl}px`,
      width: "210px",
    },

    p: {
      transition: "transform 0.2s linear",
      opacity: 1,
    },

    h6: {
      transition: "all 0.2s linear",
      transform: "translateY(58px)",
      fontFamily: "Helvetica",
      fontSize: "18px",
      lineHeight: "21px",
      textAlign: "center",
      fontWeight: 400,
      color: "transparent",
      margin: "0 !important",
      opacity: 0,
    },

    "&:hover": {
      backgroundColor: "white",
      color: "transparent",

      p: {
        transform: "translateY(-55px)",
        transition: "all 0.2s linear",
        opacity: 0,
      },

      h6: {
        transform: "translateY(-21px)",
        transition: "all 0.2s linear",
        color: theme.black,
        opacity: 1,
      },
    },
  },
}));

export const PlatformButton = ({ children, ...rest }) => {
  const { classes, cx } = useStyles();
  const { classes: buttonBaseClasses } = useButtonBaseStyles();

  return (
    <UnstyledButton
      className={cx(buttonBaseClasses.root, classes.platform)}
      {...rest}
    >
      <p>{children}</p>
      <h6>{children}</h6>
    </UnstyledButton>
  );
};

PlatformButton.propTypes = {
  children: ChildrenType,
};

PlatformButton.defaultProps = {
  children: "",
};
