import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  newsletterWrapper: {
    width: "100vw",
    justifyContent: "center",
    backgroundColor: theme.colors.violet[1],
    padding: theme.spacing.md,
  },

  titleWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1320px",
    padding: "16px 0 32px",

    [theme.fn.largerThan("md")]: {
      flexDirection: "row",
      padding: "40px 0 40px",
    },
  },

  descriptionWrapper: {
    flexDirection: "column",
    width: "100%",

    [theme.fn.largerThan("md")]: {
      width: "40%",
    },
  },

  formWrapper: {
    flexDirection: "column",
    width: "100%",

    [theme.fn.largerThan("md")]: {
      width: "40%",
    },
  },

  footerWrapper: {
    flexDirection: "column",
    width: "100%",
  },

  socialLinks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: "32px",

    [theme.fn.largerThan("md")]: {
      marginBottom: "80px",
    },
  },
}));
