import React from "react";
import { Container } from "@mantine/core";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.red[0],
  },
}));

export const PageContainer = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Container size="xl" px="md" classNames={classes.root}>
      {children}
    </Container>
  );
};
