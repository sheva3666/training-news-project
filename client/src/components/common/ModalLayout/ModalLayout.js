import React from "react";
import { Modal, Button, Box, Fade, Backdrop } from "@material-ui/core";
import NewsDetailsCard from "../NewsDetailsCard/NewsDetailsCard";
import { useStyles } from "./style";

const ModalLayout = ({ open, handleClose, news }) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Modal open={open} onClose={handleClose} closeAfterTransition>
          <Fade in={open}>
            <Box className={classes.modal}>
              <NewsDetailsCard news={news} />
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default ModalLayout;
