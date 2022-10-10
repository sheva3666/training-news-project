import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    top: 0,
    left: 0,
    right: 0,
    padding: "20px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.colors.secondary.main,
    position: "fixed",
  },

  navLogo: {
    color: theme.colors.primary.main,
    fontWeight: theme.font.weight.bold,
    width: "120px",
    fontSize: "25px",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
  },

  search: {
    padding: "2px 5px",
    borderRadius: "10px",
  },

  navigation: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    justifyContent: "flex-end",
  },

  link: {
    textDecoration: "none",
    color: theme.colors.primary.main,
    textTransform: "uppercase",
    fontSize: "10px",
    border: `1px solid ${theme.colors.primary.main}`,
    borderRadius: "20px",
    padding: "5px 3px",
    "&:hover": {
      background: theme.colors.primary.main,
      color: theme.colors.secondary.main,
    },
  },
}));
