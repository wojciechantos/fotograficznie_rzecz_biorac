import React from "react";
import { Title, createStyles } from "@mantine/core";
import PropTypes from "prop-types";
import { ChildrenType } from "../Types";
import { fontColorsMap } from "./fontColorsMap";

const useStyles = createStyles((theme) => ({
  h1: {
    fontFamily: "Lora",
    fontSize: "60px",
    lineHeight: "58.8px",
    fontWeight: 400,

    [theme.fn.smallerThan("sm")]: {
      fontSize: "48px",
      lineHeight: "47px",
    },
  },
  h2: {
    fontFamily: "Lora",
    fontSize: "34px",
    lineHeight: "37.4px",
    fontWeight: 400,
  },
  h3: {
    fontFamily: "Helvetica",
    fontSize: "24px",
    lineHeight: "28.8px",
    fontWeight: 400,
  },
  h4: {
    fontFamily: "Helvetica",
    fontSize: "18px",
    lineHeight: "27px",
    fontWeight: 400,
  },
}));

export const Heading = ({ children, level, color, ...rest }) => {
  const { classes } = useStyles();

  const responsiveMap = {
    1: classes.h1,
    2: classes.h2,
    3: classes.h3,
    4: classes.h4,
  };

  return (
    <Title
      order={level}
      className={responsiveMap[level]}
      color={fontColorsMap[color]}
      {...rest}
    >
      {children}
    </Title>
  );
};

Heading.propTypes = {
  children: ChildrenType,
  level: PropTypes.number,
  color: PropTypes.string,
};

Heading.defaultProps = {
  children: "",
  level: 2,
  color: "black",
};
