import React from "react";
import { Text as TextBase, createStyles } from "@mantine/core";
import PropTypes from "prop-types";
import { ChildrenType } from "../Types";
import { fontColorsMap } from "./fontColorsMap";

const useStyles = createStyles((theme) => ({
  regular: {
    fontFamily: "Helvetica",
    fontSize: "18px",
    lineHeight: "21px",
    textAlign: "center",
    fontWeight: 400,
  },
}));

export const ButtonText = ({ children, color, ...rest }) => {
  const { classes } = useStyles();

  return (
    <TextBase
      component="p"
      className={classes.regular}
      color={fontColorsMap[color]}
      {...rest}
    >
      {children}
    </TextBase>
  );
};

ButtonText.propTypes = {
  children: ChildrenType,
  color: PropTypes.string,
  variant: PropTypes.string,
};

ButtonText.defaultProps = {
  children: "",
  color: "white",
};
