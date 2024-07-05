import { Typography, Box, Button, TextField } from "@mui/material"
//import HeaderConnect from "../../components/headerConnection/HeaderConnect"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
//import { IoAddCircleOutline } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";
import HeaderAccueil from "../../components/header/HeaderAccueil";
import Headerb from "../../components/header/Headerb"


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', "exemp", "", "", ""),
];

const styleThead = {
  fontWeight: "normal",
  color: "#000",
  fontSize: "16px" }

export default function CreateBillet() {

  const [billetData, setBilletData] = useState(rows); // Déplacez useState à l'intérieur du composant

  const ajouterNouveauBillet = (e) => {
    e.preventDefault()
    const nouveauBillet = createData('', '', '', '', '');
    setBilletData([...billetData, nouveauBillet]);
  };

  const supprimerBillet = (index) => {
    const nouveauxBillets = [...billetData];
    nouveauxBillets.splice(index, 1);
    setBilletData(nouveauxBillets);
  };


  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex:1 }}>
        <Headera />
        <Headerb />
      </Box>
      <Box mt={18.35} sx={{ padding: "0px 45px" }}> 
        <Box sx={{ /*bgcolor: "red",*/ padding: "15px 0px 0px 0px" }}>
          <Typography sx={{ml: "-1px", backgroundColor: "#fff", borderRadius: "2px", padding: "5px 0px 5px 1px", textTransform: "uppercase", position: "relative", '::after': { content: "''", display: "block", bgcolor: "#291F43", height: "2px", width: "62px"  }, fontSize: "1.4rem", fontWeight: "600" }}>Création de billet</Typography>
        </Box>
        <Box fullWidth sx={{ mt:2.5, mx: "auto" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650  }} aria-label="simple table">

              <TableHead sx={{ bgcolor: "#F8F7FA" }}>
                <TableRow>
                  <TableCell sx={styleThead}>Type de billet</TableCell>
                  <TableCell sx={styleThead} align="">Nombre de billet</TableCell>
                  <TableCell sx={styleThead} align="left">Tarif</TableCell>
                  <TableCell sx={styleThead} align="left">Archive</TableCell>
                  <TableCell sx={styleThead} align="left">Total</TableCell>
                </TableRow>
              </TableHead>

              <TableBody sx={{ /*bgcolor: "#F8F7FA"*/ }}>
                {
                  billetData.map((row, index) => (  
                    index < 3 && (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row"><TextField size="small" /></TableCell>
                      <TableCell align="right"><TextField size="small" /></TableCell>
                      <TableCell align="right"><TextField size="small" /></TableCell>
                      <TableCell align="right"><TextField size="small" /></TableCell>
                      <TableCell align="right"><TextField size="small" /></TableCell>
                    </TableRow>
                    )
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <Button  
            sx={{ bgcolor: "#291F43", color: "#fff", mt: 1, "&:hover": { bgcolor: "#291E25"}}}
            onClick={ajouterNouveauBillet}
            ><MdAddCircle />
          </Button>
          <Button  
            sx={{ bgcolor: "#fff", color: "#fff", mt: 1, ml: 2, "&:hover": { bgcolor: "#fff"}, border: "1px solid red"}}
            onClick={supprimerBillet}
            >
              <FaTrash color="red" />
          </Button>
        </Box>
      </Box>
    </>
  )
}
