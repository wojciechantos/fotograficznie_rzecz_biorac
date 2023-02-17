import { createStyles } from "@mantine/core";
import { MoreButton } from "../Buttons";

export const useStyles = createStyles((theme, _params, getRef) => ({
  fullFrameWrapper: {
    width: "100%",
    height: "515px",
    backgroundColor: "transparent",
    borderRadius: `0px ${theme.radius.xl}px`,
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      opacity: 0.6,
      [`.${getRef("more")}`]: {
        marginLeft: theme.spacing.sm,
      },

      [`.${getRef("icon")}`]: {
        transform: "scale(1.25, 1)",
      },
    },

    ".gatsby-image-wrapper": {
      objectPosition: "right top",
      zIndex: -1,
      position: "absolute",
      top: 0,
      right: 0,
      width: "100%",
      height: "515px",
    },
  },

  frameWrapper: {
    width: "100%",
    height: "330px",
    backgroundColor: "transparent",
    borderRadius: `0px ${theme.radius.xl}px`,
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      opacity: 0.6,
      [`.${getRef("more")}`]: {
        marginLeft: theme.spacing.sm,
      },

      [`.${getRef("icon")}`]: {
        transform: "scale(1.25, 1)",
      },
    },

    ".gatsby-image-wrapper": {
      zIndex: -1,
      position: "absolute",
      width: "100%",
      height: "100%",
    },
  },

  innerWrapper: {
    padding: "40px",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
}));
