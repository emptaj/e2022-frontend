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
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function RegistrationAcceptedModal({ isModalShown }) {
    let navigate = useNavigate();

    return ( 
        <Modal
            open={isModalShown}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClick={() => navigate("/login")}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Account created
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Thank you very much for creating an account!
                Activation code has been sent on your mailbox
                </Typography>
            </Box>
        </Modal>
      )
}