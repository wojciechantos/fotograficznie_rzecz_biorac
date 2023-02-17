import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
  contentWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  grid: {
    width: "100%",
    height: "auto",
  },

  moreButtonWrapper: {
    width: "100%",
    justifyContent: "center",
    position: "relative",
    marginTop: theme.spacing.xxl,
    marginBottom: theme.spacing.xxl,

    [theme.fn.largerThan("lg")]: {
      // width: "fit-content",
      // marginLeft: "auto",
      [`.${getRef("more")}`]: {
        // position: "absolute",
        // right: "-10px",
      },

      // [`.${getRef("more")}:hover`]: {
      //   marginLeft: theme.spacing.xl,
      // },
    },
  },
}));
