import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 650,
    background: theme.colors.secondary.main,
    border: "2px solid #000",
    color: theme.colors.primary.main,
    transition: "0.5s",
    overflow: "auto",
    padding: "20px",
    borderRadius: "10px",
  },
}));
