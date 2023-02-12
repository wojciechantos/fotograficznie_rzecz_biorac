import React from "react";
import { Container } from "@mantine/core";

export const PageContainer = ({ children }) => {
  return (
    <Container px={0} size="xl">
      {children}
    </Container>
  );
};
