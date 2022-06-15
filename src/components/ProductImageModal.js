import { ImageList, ImageListItem, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"; 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 1400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ProductImageModal({ isModalShown, setIsModalShown, imageSource }) {

    return ( 
        <Modal
            open={isModalShown}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClick={() => setIsModalShown(false)}
        >
            <Box sx={style} >
                <img src={imageSource} alt=""/>
            </Box>
        </Modal>
      )
}