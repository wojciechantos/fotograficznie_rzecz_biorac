import React from "react";
import { UnstyledButton, createStyles } from "@mantine/core";
import { useButtonBaseStyles } from "../useButtonBaseStyles";
import PropTypes from "prop-types";
import { ChildrenType } from "../../Types";

const useStyles = createStyles((theme) => ({
  primary: {
    backgroundColor: theme.colors.violet[1],
    color: "white",

    "&:hover": {
      backgroundColor: theme.colors.violet[2],
    },
  },

  secondary: {
    backgroundColor: "white",
    border: `1px solid ${theme.colors.violet[1]}`,
    color: theme.colors.violet[1],

    "&:hover": {
      backgroundColor: theme.colors.violet[1],
      color: "white",
    },
  },

  creamy: {
    backgroundColor: theme.colors.creamy[1],
    color: theme.colors.violet[1],

    "&:hover": {
      backgroundColor: theme.colors.creamy[2],
    },
  },

  large: {
    paddingLeft: "60px",
    paddingRight: "60px",
  },

  fullWidth: {
    width: "100%",
  },
}));

export const AppButton = ({ children, variant, size, ...rest }) => {
  const { classes, cx } = useStyles();
  const { classes: buttonBaseClasses } = useButtonBaseStyles();

  return (
    <UnstyledButton
      className={cx(buttonBaseClasses.root, classes[variant], classes[size])}
      {...rest}
    >
      {children}
    </UnstyledButton>
  );
};

AppButton.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.oneOf(["standard", "large", "fullWidth"]),
  children: ChildrenType,
};

AppButton.defaultProps = {
  variant: "primary",
  size: "standard",
  children: "",
};
