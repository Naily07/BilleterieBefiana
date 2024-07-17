import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdFileDownload } from "react-icons/md";
import saryGq from "../../assets/logo/imgQr.png"
//import ModalImageQr from '../modalImage/ModalImageQr';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};



// eslint-disable-next-line react/prop-types
function TicketModal({ typeTicket, nbTicket }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickMod = ()=> {
    alert("Modal")
    handleClose()
  }

  const listTicketQr = ()=> {
    const boxes = []
    for (let i = 0; i < nbTicket ; i++ ){
      boxes.push(
        <Box key={i} onClick={handleClickMod} sx={{ width: "100px", height: "100px", bgcolor: "grey", mx: "auto", mt:1, backgroundImage: `url(${saryGq})`, backgroundSize: "cover", cursor: "pointer", backgroundPosition: "center" }}>
        </Box>      
      )
    }
    return boxes
  }

  return (
    <>
      <Box>
        <Button onClick={handleOpen} sx={{ border: "1px solid #291F43", color: "green", fontSize: "12px" }}>Télécharger un ticket<MdFileDownload size={20}/></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center" }}>
              List des Billets : <span style={{ fontWeight: "600", color: "#291F43" }}>{typeTicket}</span>
            </Typography>
            <Box fullWidth mt={2} sx={{ display: "flex" }}>
              {listTicketQr()}
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  )
}

export default TicketModal