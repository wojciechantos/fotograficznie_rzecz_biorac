import React from "react";
import { Global } from "@mantine/core";
import themeConfig from "./themeConfig";

export default () => (
  <Global
    styles={() => [
      {
        body: {
          backgroundColor: themeConfig.colors.backgroundColor[0],
        },
      },
    ]}
  />
);
