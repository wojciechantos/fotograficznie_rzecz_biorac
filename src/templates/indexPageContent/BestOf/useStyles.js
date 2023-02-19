import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  sectionWrapper: {
    height: "91vh",
    position: "relative",
    zIndex: 0,

    [theme.fn.largerThan("md")]: {
      height: "81vh",
    },
  },

  backgroundWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0.25,
  },

  headersWrapper: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    zIndex: 2,
  },
  //
  // headersWrapper: {
  //   width: "100%",
  //   alignItems: "left",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   height: "100vh",
  //
  //   [theme.fn.largerThan("sm")]: {
  //     width: "80%",
  //   },
  //
  //   [theme.fn.largerThan("md")]: {
  //     width: "100%",
  //     paddingRight: theme.spacing.xl,
  //     paddingBottom: 0,
  //     justifyContent: "space-between",
  //     height: "auto",
  //     alignItems: "flex-start",
  //   },
  // },
  //
  // imageMobileWrapper: {
  //   position: "relative",
  //   zIndex: 3,
  // },
}));
