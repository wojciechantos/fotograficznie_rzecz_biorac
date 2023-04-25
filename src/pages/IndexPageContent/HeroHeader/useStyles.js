import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  sectionWrapper: {
    height: "auto",
    overflow: "hidden",
    paddingTop: theme.spacing.xxl,
    position: "relative",
    zIndex: 0,

    [theme.fn.largerThan("md")]: {
      height: "100vh",
    },
  },

  bgFigure: {
    position: "absolute",
    zIndex: 1,
    left: "50%",
    top: "40%",

    [theme.fn.largerThan("md")]: {
      left: "32%",
      top: "20%",
    },
  },

  heroWrapper: {
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    flexDirection: "column",
    position: "relative",
    zIndex: 3,

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
      alignItems: "flex-start",
    },
  },

  imageMobileWrapper: {
    position: "relative",
    zIndex: 3,
  },
}));

export default useStyles;
