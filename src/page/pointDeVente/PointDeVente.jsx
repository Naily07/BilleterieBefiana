import { useState } from 'react';
import { Box, Button, Stack, Typography, TextField } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import Headerc from "../header/Headerc"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
import { MdDelete } from "react-icons/md";
//import { styled } from '@mui/material/styles';
//import FormGroup from '@mui/material/FormGroup';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Switch from '@mui/material/Switch';
//import Typography from '@mui/material/Typography';
//import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';

/*
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
*/
//import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SupprePointDeVente from '../../components/modal/ModalAjout'


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


const infoPoint = [
  {
    check : '',
    nom : "Nary",
    email: "narisoa@gmail.com",
    date: "05/06/2024",
    status : "",
    lieu : "Ivandry",
    action : ""
  },
  {
    check : '',
    nom : "Nome",
    email: "opsoa@gmail.com",
    date: "08/06/2024",
    status : '',
    lieu : "Itaosy",
    action : ""
  },
  {
    check : '',
    nom : "Koty",
    email: "rteea@gmail.com",
    date: "12/06/2024",
    status : '',
    lieu : "Akory",
    action : ""
  }
]

const tabEvent = [
  {
    typeBille : "Simple"
  },
  {
    typeBille : "Silver"
  },
  {
    typeBille : "Gold"
  }
]


function PointDeVente() {

  const [openSup, setOpenSup] = useState(false)

  //Function de point de vente Tsy mandeha
  const [indexToDelete, setIndexToDelete] = useState(null);
  const [ pointDeVent, setpointDeVent ] = useState(infoPoint)
  const supprimerPointDeVent = (index) => {
    //alert("Ecoute")
    const nouveauPointDeVente = [...pointDeVent]
    nouveauPointDeVente.splice(index, 1)
    setpointDeVent(nouveauPointDeVente)
  }

  const handleCloseSuppre = (index) => {
    setIndexToDelete(index);
    setOpenSup(false);
  };

  //Validation desupression d'un poinot de vente
  const [ unpoint, setUnpoint ] = useState("")
  const handleOpenSuppre = (nom) => {
    setUnpoint(nom);
    setOpenSup(true);
  };


  return (
    <>
      <Headerc />
      <Box sx={{ height: "0px", display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "40px 40px" }}>
        <SupprePointDeVente />
      </Box>
      <Stack fullWidth direction="rows" sx={{ padding: "0px 40px", display: "flex", justifyContent: "space-between" }} >
        <Box sx={{ width: "66%", border: "1px solid rgba(0,0,0, 0.10)" }}>
          <TableContainer sx={{ border: "1px solid rgba(0,0,0, 0.10)" }}>
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: "#F4F2FF" }}>
                  <TableCell sx={{ '&.MuiTableCell-root': { padding: "0px 0px 0px 16px" } }}><Checkbox /></TableCell>
                  <TableCell align="left" sx={{ color: "#6E6893", fontWeight: "500" }} >NAME</TableCell>
                  <TableCell align="left" sx={{ color: "#6E6893", fontWeight: "500" }} >STATUS</TableCell>
                  <TableCell align="center" sx={{ color: "#6E6893", fontWeight: "500" }} >LIEU</TableCell>
                  <TableCell align="center" sx={{ color: "#6E6893", fontWeight: "500" }} >ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {infoPoint.map((row) => (
                  <TableRow
                    key={row.check}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" ><Checkbox /></TableCell>
                    <TableCell align="left">
                      {row.nom}
                      <Typography sx={{ color: "#6E6893" }}>{row.email}</Typography>
                    </TableCell>
                    <TableCell align="left" sx={{ '&.MuiTableCell-root': { padding: "0px" } }}>
                      <Box sx={{ width: "75px", display: "flex", bgcolor: "#E6E6F2", alignItems: "center", padding: "0px 4px", borderRadius: "50px", cursor: "pointer" }}>
                        <Box sx={{ width: "10px", height: "10px", bgcolor: "green", borderRadius: "50px" }} ></Box>
                        <Typography sx={{ ml:1, color: "#1E0A3C", fontSize: "14px" }} >Active</Typography>
                      </Box>
                      <Box>
                        <Typography mt={1} sx={{ fontSize: "14px" }} >Last login : {row.date}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{row.lieu}</TableCell>
                    <TableCell align="center"><MdDelete onClick={() =>  handleOpenSuppre(row.nom) } color='red' size="1.5rem" cursor="pointer" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>    

        {/*Makua tour tableau*/}
        <Box sx={{ width: "32%", bgcolor: "#fff", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.10) ", padding: "0px 0px 20px 0px"}}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", height: "40px", alignItems: "center", padding: "25px 20px", bgcolor: "#fff" }}>
            <Typography sx={{ color: "#1E0A3C", fontWeight: "700" }}>Anicka Nome</Typography>
          </Box>
          <Box sx={{ padding: "0px 25px" }}>
            <Typography sx={{ mb:1.5, fontSize: "14px" }}>Selectionner un évèment</Typography>
            <select style={{ width: "210px", padding: "10px 15px", borderRadius: "3px", backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.10)" }}>
              <option value="">Makua Tour</option>
              <option value="">Festival</option>
              <option value="">Soirée</option>
              <option value="">Sport</option>
            </select>
            <Typography sx={{ mt: 1.7, fontSize: "14px", mb:1.5 }}>Ticket displonible de lévènement</Typography>
            <Box>
            <TableContainer sx={{ border: "1px solid rgba(0,0,0, 0.10)" }}>
              <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ bgcolor: "#F4F2FF" }}>
                    {
                      tabEvent.map((typB, i)=> (
                        <TableCell key={i} align="center" sx={{ color: "#6E6893", fontWeight: "500", textTransform: "uppercase", '&.MuiTableCell-root': { padding: "10px" } }} >{typB.typeBille}</TableCell>
                      ))
                    }                 
                  </TableRow> 
                </TableHead>
                <TableBody>             
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ '&.MuiTableCell-root': { padding: "10px" } }} align="center">50</TableCell>
                    <TableCell align="center">60</TableCell>
                    <TableCell align="center">12</TableCell>
                  </TableRow>             
                </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Typography sx={{ mt: 1.7, fontSize: "14px", mb:1.5}}>Ticket du point de vente</Typography>
            <Box>
            <TableContainer sx={{ border: "1px solid rgba(0,0,0, 0.10)" }}>
              <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ bgcolor: "#F4F2FF" }}>
                    {
                      tabEvent.map((typB, i)=> (
                        <TableCell key={i} align="center" sx={{ color: "#6E6893", fontWeight: "500", textTransform: "uppercase", '&.MuiTableCell-root': { padding: "10px" } }} >{typB.typeBille}</TableCell>
                      ))
                    }                 
                  </TableRow> 
                </TableHead>
                <TableBody>             
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="center" sx={{ '&.MuiTableCell-root': { padding: "0px" } }}><TextField type='number' size='small' sx={{ maxWidth: "100px", bgcolor: "" }} /></TableCell>
                    <TableCell align="center" x={{ '&.MuiTableCell-root': { padding: "10px" } }}><TextField type='number' size='small' sx={{ maxWidth: "100px", padding: "5px" }} /></TableCell>
                    <TableCell align="center"><TextField type='number' size='small' sx={{ maxWidth: "100px" }} /></TableCell>
                  </TableRow>             
                </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <Box sx={{ mx: "auto", width: "90px", mt: 2.1 }}>
            <Button sx={{ color: "#000", textTransform: "lowercase", border: "1px solid rgba(0, 0, 0, 0.35)", padding: "5px 30px", borderRadius: "5px" }}><span style={{ textTransform: "uppercase" }}>V</span>alider</Button>
          </Box>
        </Box>
      </Stack>

      {/*Modal supprssion*/}

      <Modal
        open={openSup}
        onClose={handleCloseSuppre}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" component="h2">
            Voulez-vous supprimer <span style={{ fontWeight: "600" }}>{unpoint}</span> dans le point de vente?
          </Typography>
          <Box sx={{ width: "100%", justifyContent: "flex-end", display: "flex" }}>
            <Box sx={{ mt: 4 , display: "flex", width: "140px", justifyContent: "space-between" }}>
              <Button onClick={() => supprimerPointDeVent(indexToDelete)} sx={{ border: "1px solid rgba(0, 0, 0, 0.10)", bgcolor: "blue", color: "#fff", textTransform: "lowercase", fontWeight: "600", padding: "6px 14px", "&:hover": { bgcolor: "#006769"} }}><span style={{ textTransform: "uppercase" }}>o</span>ui</Button>
              <Button onClick={handleCloseSuppre} sx={{ border: "1px solid rgba(0, 0, 0, 0.10)", color: "#000", textTransform: "lowercase", fontWeight: "600", padding: "6px 14px"  }}><span style={{ textTransform: "uppercase" }}>N</span>on</Button>
            </Box>
          </Box>
        </Box>
      </Modal>  
    </>
  )
}

export default PointDeVente