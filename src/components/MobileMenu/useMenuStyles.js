import { createStyles } from "@mantine/core";
export const useMenuStyles = createStyles((theme) => ({
  root: {
    height: "100vh",
  },

  drawer: {
    backgroundColor: theme.colors.backgroundColor[0],
  },

  body: {
    height: "100%",
    padding: theme.spacing.md,
  },

  logo: {
    width: "64px",
    height: "50px",
  },

  links: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    width: "100%",
    height: "90%",
  },

  link: {
    color: theme.colors.violet[2],
  },
}));
