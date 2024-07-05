import { useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Headerc from "../../components/header/Headerc";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//import Paper from '@mui/material/Paper';
import { MdDelete } from "react-icons/md";
import Modal from "@mui/material/Modal";
import TicketTableau from "./component/ticketTableau";
import AjoutPointDeVente from "../../components/modal/ModalAjoutPdv";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

const infoPoint = [
  {
    check: "",
    nom: "Nary",
    email: "narisoa@gmail.com",
    date: "05/06/2024",
    status: "",
    lieu: "Ivandry",
    action: "",
  },
  {
    check: "",
    nom: "Nome",
    email: "opsoa@gmail.com",
    date: "08/06/2024",
    status: "",
    lieu: "Itaosy",
    action: "",
  },
  {
    check: "",
    nom: "Koty",
    email: "rteea@gmail.com",
    date: "12/06/2024",
    status: "",
    lieu: "Akory",
    action: "",
  },
];
const tableHeadContent = ["name", "status", "lieu", "action"];

function PointDeVente() {
  const [openSup, setOpenSup] = useState(false);
  //Function de point de vente Tsy mandeha
  const [indexToDelete, setIndexToDelete] = useState(null);
  const [pointDeVent, setpointDeVent] = useState(infoPoint);
  const supprimerPointDeVent = (index) => {
    //alert("Ecoute")
    const nouveauPointDeVente = [...pointDeVent];
    nouveauPointDeVente.splice(index, 1);
    setpointDeVent(nouveauPointDeVente);
  };

  const handleCloseSuppre = (index) => {
    setIndexToDelete(index);
    setOpenSup(false);
  };

  //Validation desupression d'un poinot de vente
  const [unpoint, setUnpoint] = useState("");
  const handleOpenSuppre = (nom) => {
    setUnpoint(nom);
    setOpenSup(true);
  };

  return (
    <>
      <Headerc />
      <Box
        sx={{
          height: "0px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "40px 40px",
        }}
      >
        <AjoutPointDeVente />
      </Box>
      <Stack
        fullWidth
        direction="rows"
        sx={{
          padding: "0px 40px",
          display: "flex",
          justifyContent: "space-between",
        }}
        gap={5}
      >
        <Box
          sx={{
            minWidth: "60%",
            border: "1px solid rgba(0,0,0, 0.10)",
            flexGrow: "1",
          }}
        >
          <TableContainer sx={{ border: "1px solid rgba(0,0,0, 0.10)" }}>
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: "#F4F2FF" }}>
                  <TableCell
                    sx={{
                      "&.MuiTableCell-root": {
                        padding: "0px 0px 0px 16px",
                      },
                    }}
                  >
                    <Checkbox />
                  </TableCell>
                  {tableHeadContent.map((item) => {
                    return (
                      <TableCell
                        key={item}
                        align="left"
                        sx={{
                          color: "#6E6893",
                          fontWeight: "500",
                          textTransform: "uppercase",
                        }}
                      >
                        {item}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {pointDeVent.map((row) => (
                  <TableRow
                    key={row.check}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <Checkbox />
                    </TableCell>
                    <TableCell align="left">
                      {row.nom}
                      <Typography sx={{ color: "#6E6893" }}>
                        {row.email}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        "&.MuiTableCell-root": { padding: "0px" },
                      }}
                    >
                      <Box
                        sx={{
                          width: "75px",
                          display: "flex",
                          bgcolor: "#E6E6F2",
                          alignItems: "center",
                          padding: "0px 4px",
                          borderRadius: "50px",
                          cursor: "pointer",
                        }}
                      >
                        <Box
                          sx={{
                            width: "10px",
                            height: "10px",
                            bgcolor: "green",
                            borderRadius: "50px",
                          }}
                        ></Box>
                        <Typography
                          sx={{
                            ml: 1,
                            color: "#1E0A3C",
                            fontSize: "14px",
                          }}
                        >
                          Active
                        </Typography>
                      </Box>
                      <Box>
                        <Typography mt={1} sx={{ fontSize: "14px" }}>
                          Last login : {row.date}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{row.lieu}</TableCell>
                    <TableCell align="center">
                      <MdDelete
                        onClick={() => handleOpenSuppre(row.nom)}
                        color="red"
                        size="1.5rem"
                        cursor="pointer"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <TicketTableau />
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
            Voulez-vous supprimer{" "}
            <span style={{ fontWeight: "600" }}>{unpoint}</span> dans le point
            de vente?
          </Typography>
          <Box
            sx={{
              width: "100%",
              justifyContent: "flex-end",
              display: "flex",
            }}
          >
            <Box
              sx={{
                mt: 4,
                display: "flex",
                width: "140px",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={() => supprimerPointDeVent(indexToDelete)}
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  bgcolor: "blue",
                  color: "#fff",
                  textTransform: "lowercase",
                  fontWeight: "600",
                  padding: "6px 14px",
                  "&:hover": { bgcolor: "#006769" },
                }}
              >
                <span style={{ textTransform: "uppercase" }}>o</span>ui
              </Button>
              <Button
                onClick={handleCloseSuppre}
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  color: "#000",
                  textTransform: "lowercase",
                  fontWeight: "600",
                  padding: "6px 14px",
                }}
              >
                <span style={{ textTransform: "uppercase" }}>N</span>on
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default PointDeVente;
