import React from "react";
import { Box } from "@mantine/core";
import { createStyles } from "@mantine/core";

const useSectionStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    minHeight: "100vh",
  },
}));

export const SectionWrapper = ({ children, height }) => {
  const { classes } = useSectionStyles();

  return (
    <Box component="section" classNames={classes.section}>
      {children}
    </Box>
  );
};
