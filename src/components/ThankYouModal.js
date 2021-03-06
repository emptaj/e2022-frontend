import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"; 
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ThankYouModal({ isModalShown, modalMessage }) {
    let navigate = useNavigate();

    return ( 
        <Modal
            open={isModalShown}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClick={() => navigate(modalMessage.navigate)}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalMessage.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalMessage.body}
                </Typography>
            </Box>
        </Modal>
      )
}