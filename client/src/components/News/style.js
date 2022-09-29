import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "5px 15px",
    textAlign: "center",
  },
  newsBox: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: "20px",
  },

  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "300px",
  },

  message: {
    fontSize: "30px",
    fontWeight: theme.font.weight.bold,
  },
}));
export default useStyles;
