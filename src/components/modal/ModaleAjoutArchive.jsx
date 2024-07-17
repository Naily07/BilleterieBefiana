import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { IoArchiveOutline } from "react-icons/io5";
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid rgba(0,0,0,0.10)',
  boxShadow: 24,
  p: 4,
  borderRadius: "8px"
};

export default function ModalAjoutArchive() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IoArchiveOutline onClick={handleOpen} color="blue" size={21} cursor="pointer"/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ ':after': { content : "''", width:"100px", height: "2px", bgcolor: "grey", display: "block", mb: 1.5  } }}>
            Archiver un billet
          </Typography>
          <Box gap={2} sx={{ height: "60px", display: "flex", alignItems: "center" }}>
            <Typography sx={{  }}>
              Nombre de billet à archiver :
            </Typography>
            <TextField type='number' size='small' style={{ width: "100px", marginTop: "-20px" }}/>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}