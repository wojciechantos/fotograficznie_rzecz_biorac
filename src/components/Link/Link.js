import React from "react";
import { Link as LinkBase } from "gatsby";
import { Box } from "@mantine/core";

export const Link = ({ to, title, className, children, ...rest }) => {
  return (
    <Box
      component={LinkBase}
      to={to}
      title={title}
      className={className}
      {...rest}
    >
      {children}
    </Box>
  );
};
