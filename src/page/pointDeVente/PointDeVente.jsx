import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Headerc from "../../components/header/Headerc";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
//import Paper from '@mui/material/Paper';
import { MdDelete } from "react-icons/md";
import Modal from "@mui/material/Modal";
import TicketTableau from "./component/ticketTableau";
import AjoutPointDeVente from "../../components/modal/ModalAjoutPdv";
import ListPdv from "../../services/pointDeVente";
import { GetLisEvent } from "../../services/eventManagement";
import CircularIndeterminate from "../../components/circular";

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

const PointDeVenteData = [
  {
    pk: 1,
    nom: "Koty",
    email: "rteea@gmail.com",
    date: "12/06/2024",
    status: "",
    lieu: "Akory",
  },
  {
    pk: 2,
    nom: "Alex",
    email: "alex@example.com",
    date: "14/07/2024",
    status: "",
    lieu: "Antananarivo",
  },
  {
    pk: 3,
    nom: "Mila",
    email: "mila@example.com",
    date: "20/08/2024",
    status: "",
    lieu: "Toamasina",
  },
];
const tableHeadContent = ["name", "status", "lieu", "action"];

function PointDeVente() {
  const [openSup, setOpenSup] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState(null);
  const [pointDeVent, setPointDeVent] = useState([]);
  const [listEvent, setListEvent] = useState([]);
  useEffect(() => {
    ListPdv()
      .then((res) => {
        console.log("PDVData", res.data);
        const pdv = res.data;
        setPointDeVent(
          pdv.map((item, i) =>
            i === 0 ? { ...item, checked: true } : { ...item, checked: false }
          )
        );
      })
      .catch((err) => err);
  }, []);

  useEffect(() => {
    setListEvent(() =>
      GetLisEvent().then((res) => {
        const items = res.data;
        items.map((item) => {
          return { nom: item.nom, pk: item.id };
        });
        setListEvent(items);
      })
    );
  }, []);

  const supprimerPointDeVent = (index) => {
    //alert("Ecoute")
    const nouveauPointDeVente = [...pointDeVent];
    nouveauPointDeVente.splice(index, 1);
    setPointDeVent(nouveauPointDeVente);
  };

  const handleCloseSuppre = (index) => {
    setIndexToDelete(index);
    setOpenSup(false);
  };
  const handleChecket = (pk) => {
    setPointDeVent((pdv) =>
      pdv.map((item) =>
        item.pk === pk
          ? { ...item, checked: !item.checked }
          : item.checked
          ? { ...item, checked: false }
          : item
      )
    );
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
      {listEvent.length > 0 ? (
        <Stack mt={"8vh"} height={"92svh"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "40px 40px",
            }}
          >
            <AjoutPointDeVente listEvent={listEvent} />
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
                minWidth: "50%",
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
                        onClick={() => handleChecket(row.pk)}
                        key={row.check}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: 0,
                          },
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            cursor: "pointer",
                            transform: "scale(1.03)",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
                          },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Checkbox
                            // onChange={(e) => handleChecket(row.pk)}
                            color="primary"
                            size="small"
                            checked={row.checked}
                          />
                        </TableCell>
                        <TableCell align="left">
                          {row.username} <br />
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
                        <TableCell align="left">{row.lieu}</TableCell>
                        <TableCell align="left">
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

            <TicketTableau pointDeVent={pointDeVent} listEvent={listEvent} />
          </Stack>
        </Stack>
      ) : (
        <CircularIndeterminate />
      )}

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
                  color: "#fff",
                  bgcolor: "secondary.light",
                  textTransform: "lowercase",
                  fontWeight: "600",
                  padding: "6px 14px",
                  "&:hover": {
                    /**bgcolor: "#006769",**/ bgcolor: "secondary.main",
                  },
                }}
                variant="contained"
              >
                <span style={{ textTransform: "uppercase" }}>o</span>ui
              </Button>
              <Button
                onClick={handleCloseSuppre}
                variant="outline"
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  color: "#000",
                  textTransform: "capitalise",
                  fontWeight: "600",
                  padding: "6px 14px",
                }}
              >
                Non
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default PointDeVente;
