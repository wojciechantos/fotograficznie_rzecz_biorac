import { createStyles } from "@mantine/core";

export const useIndexPageStyles = createStyles((theme) => ({
  sectionWrapper: {
    height: "200vh",

    [theme.fn.largerThan("md")]: {
      height: "100vh",
    },
  },

  heroWrapper: {
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    flexDirection: "column",

    [theme.fn.largerThan("md")]: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },

  headersWrapper: {
    width: "100%",
    alignItems: "left",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",

    [theme.fn.largerThan("sm")]: {
      width: "80%",
    },

    [theme.fn.largerThan("md")]: {
      width: "100%",
      paddingRight: theme.spacing.xl,
      paddingBottom: 0,
      justifyContent: "space-between",
      height: "auto",
      alignItems: "flex-end",
    },
  },
}));
