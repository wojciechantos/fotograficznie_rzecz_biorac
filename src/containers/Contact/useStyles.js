import { createStyles } from "@mantine/core";

export const useContactStyles = createStyles((theme) => ({
  sectionWrapper: {
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px 40px`,
    gap: 32,

    [theme.fn.largerThan("sm")]: {
      height: "45vh",
      flexDirection: "row",
      padding: `40px ${theme.spacing.md}px`,
    },

    [theme.fn.largerThan("md")]: {
      height: "71vh",
    },
  },

  descriptionWrapper: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    [theme.fn.largerThan("sm")]: {
      width: "50%",
      maxWidth: "555px",
    },
  },

  formWrapper: {
    width: "100%",

    [theme.fn.largerThan("sm")]: {
      width: "50%",
      maxWidth: "555px",
    },
  },

  submitButton: {
    width: "169px",
  },
}));
