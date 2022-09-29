import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    background: theme.colors.secondary.main,
    position: "fixed",
    textAlign: "center",
    padding: "10px 0px",
  },

  navLogo: {
    color: theme.colors.primary.main,
    fontSize: "22px",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
  },

  description: {
    fontSize: "10px",
    marginTop: "15px",
  },
}));
