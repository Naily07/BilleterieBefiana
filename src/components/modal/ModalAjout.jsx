import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  //height: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: "5px"
};


const listeEvent = [
  'Festivale',
  'Soirée',
  'Foire',
  'Sport',
  'Conférence',
];

const funcListEvent= ()=> {
  return(
    <>
      {
        listeEvent.map((v, i)=>(
          <Box key={i} sx={{ width: "100%", height: "35px",  display: "flex", alignItems: "center", padding: "0px 10px", justifyContent: "space-between"}} >
            <Typography>{v}</Typography>
            <Checkbox />
          </Box>
        ))
      }
    </>
  )
}

export default function SupprePointDeVente() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box>
        <Button onClick={handleOpen} sx={{ textTransform: "lowercase", color: "#fff", border: "1px solid ", bgcolor: "#1E0A3C", padding: "9px 30px", '&:hover': { bgcolor: "#1E0A3C" }, borderRadius: "10px" }}><span style={{ textTransform: "uppercase" }}>A</span>jouter un points de vente</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ borderBottom: "1px solid rgba(0,0,0,0.35)", width: "206px" }}>
            Crée un point de vente
          </Typography>
          <Box mt={4} gap={1} >
            <form >
              <Box sx={{ }}>
                <Typography>Nom d utilisateurs</Typography>
                <TextField fullWidth size='small' sx={{ mt: 1 }}/>
                <Typography sx={{ mt: 1.5 }}>Adress Email</Typography>
                <TextField type='email' fullWidth size='small' sx={{ mt: 1 }}/>
                <Typography sx={{ mt: 1.5 }}>Lieu</Typography>
                <TextField type='email' fullWidth size='small' sx={{ mt: 1 }}/>
              </Box>
            </form>
            <Box sx={{ /* height: "200px" */}}>          
              <Box sx={{ mt: 2.5 }}>
                <Accordion defaultExpanded size="small">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>Sélctionner les évènements</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ maxHeight: "100px", overflowY: "auto" }}>
                      {funcListEvent()}
                    </Box>
                  </AccordionDetails>
                  </Accordion>
                </Box>
            </Box>
            <Box sx={{ width: "100%", height: "50px", mt: 2, display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
              <Box sx={{ display: "flex", width: "180px", justifyContent: "space-between" }}>
                <Button sx={{ border: "1px solid rgba(0, 0, 0, 0.10)", bgcolor: "blue", color: "#fff", textTransform: "lowercase", fontWeight: "600", padding: "6px 14px", "&:hover": { bgcolor: "#006769"} }}><span style={{ textTransform: "uppercase" }}>e</span>nvoyer</Button>
                <Button onClick={handleClose} sx={{ border: "1px solid rgba(0, 0, 0, 0.10)", color: "#000", textTransform: "lowercase", fontWeight: "600", padding: "6px 14px"  }}><span style={{ textTransform: "uppercase" }}>R</span>etour</Button>
              </Box>
            </Box>
          </Box>

        </Box>
      </Modal>
    </div>
  );
}