import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  frameWrapper: {
    borderRadius: theme.radius.xl,
    position: "relative",
    zIndex: 0,

    [theme.fn.largerThan("md")]: {
      // height: "100vh",
    },

    img: {
      borderRadius: `0px ${theme.radius.xl}px`,
      zIndex: -1,
    },
  },

  innerWrapper: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
}));
