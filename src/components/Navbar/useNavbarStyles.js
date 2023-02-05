import { createStyles } from "@mantine/core";

const NAVBAR_HEIGHT = "160px";

export const useNavbarStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 1,
    height: NAVBAR_HEIGHT,

    [theme.fn.smallerThan("sm")]: {
      height: "auto",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    height: "100%",
  },

  logo: {
    width: "104px",
    height: "80px",

    [theme.fn.smallerThan("sm")]: {
      width: "64px",
      height: "49px",
    },
  },

  burger: {
    color: theme.colors.brand,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    width: "45%",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      width: "60%",
    },

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    color: theme.colors.violet[2],
    borderRadius: theme.radius.sm,
    padding: 2,
    transition: "0.2s ease-in-out",
    display: "flex",
    alignItems: "center",

    "&:hover": {
      backgroundColor: theme.colors.creamy[1],
    },
  },
}));
