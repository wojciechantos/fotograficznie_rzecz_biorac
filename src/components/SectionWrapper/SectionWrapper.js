import React from "react";
import { Box } from "@mantine/core";

export const SectionWrapper = ({ children, height }) => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        width: "100%",
        height: height || "100vh",
        backgroundColor: theme.colors.backgroundColor[0],
      })}
    >
      {children}
    </Box>
  );
};
