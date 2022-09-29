import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: "100px 20px 0 20px",
    maxWidth: "300px",
  },

  form: {
    display: "flex",

    gap: "10px",
  },

  input: {
    padding: "10px 5px",
    border: `1px solid ${theme.colors.secondary.main}`,
    borderRadius: "10px",
    minWidth: "300px",
  },

  btn: {
    margin: "0 auto",
    padding: "5px 30px",
    borderRadius: "10px",
    background: theme.colors.secondary.main,
    color: theme.colors.primary.main,
    cursor: "pointer",
    "&:hover": {
      background: theme.colors.primary.main,
      color: theme.colors.secondary.main,
    },
  },
}));
