import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },

  img: {
    width: "90%",
    height: "90%",
  },
}));

export default useStyles;
