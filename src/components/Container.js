import React from "react";
import { Container as BaseContainer } from "@mantine/core";

export const Container = ({ size, children }) => {
  return (
    <BaseContainer size="xl" px="xxl">
      {children}
    </BaseContainer>
  );
};
