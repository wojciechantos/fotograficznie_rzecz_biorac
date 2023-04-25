import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  contentWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  grid: {
    width: "100%",
    height: "auto",
  },

  moreButtonContainer: {
    width: "100%",
    justifyContent: "center",
    marginTop: theme.spacing.xxl,
    marginBottom: theme.spacing.xxl,

    [theme.fn.largerThan("lg")]: {
      justifyContent: "flex-end",
    },
  },

  moreButtonWrapper: {
    width: "fit-content",

    [theme.fn.largerThan("lg")]: {
      width: "250px",
    },
  },
}));

export default useStyles;
