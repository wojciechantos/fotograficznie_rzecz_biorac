import React from "react";
import { Box } from "@mantine/core";

export const SectionWrapper = ({ children, height, className }) => {
  return (
    <Box
      component="section"
      className={className}
      sx={(theme) => ({
        width: "100%",
        backgroundColor: theme.colors.backgroundColor[0],
      })}
    >
      {children}
    </Box>
  );
};
