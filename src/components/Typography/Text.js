import React from "react";
import { Text as TextBase, createStyles } from "@mantine/core";
import PropTypes from "prop-types";
import { ChildrenType } from "../Types";
import { fontColorsMap } from "./fontColorsMap";

const useStyles = createStyles((theme) => ({
  body: {
    fontFamily: "Helvetica",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
  },

  caption: {
    fontFamily: "Helvetica",
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 400,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "0.4em",
  },

  button: {
    fontFamily: "Helvetica",
    fontSize: "18px",
    lineHeight: "21px",
    fontWeight: 400,
    textAlign: "center",
  },
}));

export const Text = ({ children, color, variant, ...rest }) => {
  const { classes } = useStyles();

  const variantMap = {
    body: classes.body,
    caption: classes.caption,
    button: classes.button,
  };

  return (
    <TextBase
      component="p"
      className={variantMap[variant]}
      color={fontColorsMap[color]}
      {...rest}
    >
      {children}
    </TextBase>
  );
};

Text.propTypes = {
  children: ChildrenType,
  color: PropTypes.string,
  variant: PropTypes.string,
};

Text.defaultProps = {
  children: "",
  color: "black",
  variant: "body",
};
