import React from "react";
import { UnstyledButton, createStyles } from "@mantine/core";
import { ButtonText } from "../Typography";
import PropTypes from "prop-types";
import { ChildrenType } from "../Types";

const baseStyles = (theme) => ({
  root: {
    padding: theme.spacing.xl,
    width: "fit-content",
  },
});

const useStyles = createStyles((theme) => ({
  primary: {
    backgroundColor: theme.colors.violet[1],
    transition: "all 0.2s",
    // padding: theme.spacing.xl,
    height: "70px",

    "&:hover": {
      backgroundColor: theme.colors.violet[2],
    },
  },

  secondary: {
    "&:hover": {},
  },

  creamy: {
    backgroundColor: theme.colors.creamy[2],
    transition: "all 0.2s",
    padding: theme.spacing.xl,
    height: "70px",
    "&:hover": {},
  },

  platform: {
    "&:hover": {},
  },

  circle: {
    "&:hover": {},
  },
}));

export const AppButton = ({ children, variant, ...rest }) => {
  const { classes } = useStyles();

  // const variantMap = {
  //   primary: primary,
  //   secondary: secondary,
  //   creamy: creamy,
  //   platform: platform,
  //   circle: circle,
  // };

  return (
    <UnstyledButton styles={baseStyles} className={classes[variant]} {...rest}>
      <ButtonText>{children}</ButtonText>
    </UnstyledButton>
  );
};

AppButton.propTypes = {
  variant: PropTypes.string,
  children: ChildrenType,
};

AppButton.defaultProps = {
  variant: "primary",
  children: "",
};
