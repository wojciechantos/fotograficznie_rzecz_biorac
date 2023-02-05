import React from "react";
import { Container } from "@mantine/core";

export const PageContainer = ({ children }) => {
  return (
    <Container size="xl" px="md">
      {children}
    </Container>
  );
};
