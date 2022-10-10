import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    position: "fixed",
    right: 40,
    bottom: 80,
    height: 50,
    width: 50,
    borderRadius: "50px",
    background: theme.colors.secondary.main,
    color: theme.colors.primary.main,
    fontWeight: theme.font.weight.bold,
    cursor: "pointer",
    "&:hover": {
      background: theme.colors.primary.main,
      color: theme.colors.secondary.main,
    },
  },
}));
