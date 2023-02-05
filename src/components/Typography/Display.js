import React from "react";
import { Title, createStyles } from "@mantine/core";
import PropTypes from "prop-types";
import { ChildrenType } from "../Types";
import { fontColorsMap } from "./fontColorsMap";

const useStyles = createStyles((theme) => ({
  display: {
    fontSize: "60px",
    lineHeight: "58.8px",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "48px",
      lineHeight: "47px",
    },
  },
}));

export const Display = ({ children, color, italic, ...rest }) => {
  const { classes } = useStyles();

  return (
    <Title
      order={1}
      className={classes.display}
      italic={italic}
      color={fontColorsMap[color]}
      {...rest}
    >
      {children}
    </Title>
  );
};

Display.propTypes = {
  children: ChildrenType,
  color: PropTypes.string,
  italic: PropTypes.bool,
};

Display.defaultProps = {
  children: "",
  color: "black",
  italic: true,
};
