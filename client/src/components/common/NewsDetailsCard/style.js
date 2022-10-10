import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  newsCard: {
    margin: "10px 0px",
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  description: {
    maxWidth: "400px",
    paddingBottom: "10px",
  },

  time: {
    fontSize: "10px",
    marginTop: "15px",
  },

  url: {
    textDecoration: "none",
    padding: "05px 10px",
    border: `1px solid ${theme.colors.secondary.main}`,
    borderRadius: "20px",
    background: theme.colors.primary.main,
    color: theme.colors.secondary.main,
    cursor: "pointer",

    transition: "0,2s",
    "&:hover": {
      background: theme.colors.secondary.main,
      color: theme.colors.primary.main,
    },
  },

  urlContainer: {
    margin: "10px 0px",
  },
}));

export default useStyles;
