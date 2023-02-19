import { createStyles } from "@mantine/core";

export const useButtonBaseStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl,
    width: "fit-content",
    borderRadius: theme.radius.md,
    transition: "all 0.2s",
    height: "70px",
    fontFamily: "Helvetica",
    fontSize: "18px",
    lineHeight: "21px",
    textAlign: "center",
    fontWeight: 400,
  },
}));
