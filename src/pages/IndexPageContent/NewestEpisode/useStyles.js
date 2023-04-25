import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  contentWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonsGroupWrapper: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    [theme.fn.largerThan("md")]: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
  },

  buttonsWrapper: {
    flexDirection: "column",

    [theme.fn.largerThan(382)]: {
      flexDirection: "row",
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
      alignItems: "flex-start",
    },
  },
}));

export default useStyles;
