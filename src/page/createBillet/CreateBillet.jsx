import { Typography, Box, Button, TextField, Stack } from "@mui/material";
//import HeaderConnect from "../../components/headerConnection/HeaderConnect"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
//import { IoAddCircleOutline } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";
import HeaderAccueil from "../../components/header/HeaderAccueil";
import fond from "../../assets/event1.jpg";
// import Headerb from "../../components/header/Headerb"

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("Frozen yoghurt", "exemp", "", "", "")];

const styleThead = {
  fontWeight: "normal",
  color: "#fff",
  fontSize: "16px",
  padding: "9px",
  bgcolor: "#291F43",
};

export default function CreateBillet() {
  const [billetData, setBilletData] = useState(rows); // Déplacez useState à l'intérieur du composant

  const ajouterNouveauBillet = (e) => {
    e.preventDefault();
    const nouveauBillet = createData("", "", "", "", "");
    setBilletData([...billetData, nouveauBillet]);
  };

  /*
  const linmit = 2
  const supprimerBillet = (index) => {
    if ( index > linmit ) {
      const nouveauxBillets = [...billetData];
      nouveauxBillets.splice(index, 1);
      setBilletData(nouveauxBillets);
    }
  };*/

  const supprimerBillet = (index) => {
    if (billetData.length > 1) {
      const nouveauxBillets = [...billetData];
      nouveauxBillets.splice(index, 1);
      setBilletData(nouveauxBillets);
    }
  };

  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
        <HeaderAccueil />
        {/* <Headerb /> */}
      </Box>
      <Stack
        direction={"row"}
        sx={{
          padding: "0px 45px",
          background:
            `linear-gradient(rgba(0, 0, 0 ,0.5), rgba(0, 0, 0 ,0.5)), url(${fond}) no-repeat center center / cover`,
          backgroundBlendMode: "overlay",
        }}
        border={"1px solid black"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"100svh"}
      >
        {/* <Box sx={{padding: "15px 0px 0px 0px" }}> */}
        {/* </Box> */}

        <Box sx={{ width: "750px" }}>
          {/* <Stack sx={{ mx: "auto" }}> */}
          <Typography
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
              color: "#fff",
              "::after": {
                content: "''",
                display: "block",
                bgcolor: "#fff",
                height: "2px",
                width: "62px",
                mb: 2,
              },
              fontSize: "1.4rem",
              fontWeight: "600",
            }}
          >
            Création de billet
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ bgcolor: "#F8F7FA" }}>
                <TableRow>
                  <TableCell sx={styleThead} align="center">
                    Type de billet
                  </TableCell>
                  <TableCell sx={styleThead} align="center">
                    Nombre de billet
                  </TableCell>
                  <TableCell sx={styleThead} align="center">
                    Tarif
                  </TableCell>
                  <TableCell sx={styleThead} align="center">
                    Archive
                  </TableCell>
                  <TableCell sx={styleThead} align="center">
                    Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={
                  {
                    /*bgcolor: "#F8F7FA"*/
                  }
                }
              >
                {billetData.map(
                  (row, index) =>
                    index < 3 && (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <TextField size="small" />
                        </TableCell>
                        <TableCell align="right">
                          <TextField size="small" />
                        </TableCell>
                        <TableCell align="right">
                          <TextField size="small" />
                        </TableCell>
                        <TableCell align="right">
                          <TextField size="small" />
                        </TableCell>
                        <TableCell align="right">
                          <TextField size="small" />
                        </TableCell>
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack direction={"row"} m={1}>
            <Button
              sx={{
                bgcolor: "#291F43",
                color: "#fff",
                mt: 1,
                "&:hover": { bgcolor: "#291E25" },
              }}
              onClick={ajouterNouveauBillet}
            >
              <MdAddCircle />
            </Button>
            <Button
              sx={{
                bgcolor: "#fff",
                color: "#fff",
                mt: 1,
                ml: 2,
                "&:hover": { bgcolor: "#fff" },
                border: "1px solid red",
              }}
            >
              <FaTrash color="red" onClick={() => supprimerBillet(0)} />
            </Button>
          </Stack>
          {/* </Stack> */}
        </Box>
      </Stack>
    </>
  );
}
