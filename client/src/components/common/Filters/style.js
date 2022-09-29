import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    top: "69px",
    left: 0,
    right: 0,
    padding: "15px 0",
    position: "fixed",
    background: theme.colors.primary.main,
  },

  filter: {
    padding: "6.5px 7px",
    borderRight: `1px solid ${theme.colors.secondary.main}`,
    textTransform: "capitalize",
    fontSize: "15px",
    transition: "0.2s",
    cursor: "pointer",
    textAlign: "center",
    "&:hover": {
      fontWeight: theme.font.weight.bold,
      background: "rgba(235, 235, 235, 0.815)",
    },
  },
}));
