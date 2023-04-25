import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  sectionWrapper: {
    height: "190px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 36,

    [theme.fn.largerThan("sm")]: {
      height: "250px",
      paddingBottom: 56,
    },
  },
}));
