import { useEffect, useState } from "react";
import HeaderAccueil from "../../components/header/HeaderAccueil";
import Headerb from "../../components/header/HeaderAccueil";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
//import { FaTrash } from "react-icons/fa6";
//import { IoAddCircleOutline } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import saryQr from "../../assets/logo/imgQr.png";
import { MdOutlineDelete } from "react-icons/md";
import ModalAjoutArchive from "../../components/modal/ModaleAjoutArchive";
import { FormControl } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import ControlInput from "./component/controlInput";

const tableBillet = [
  {
    type: "Simple",
    nb_ticket: 15,
    tary: 1500,
    total: "",
  },
  {
    type: "Silver",
    nb_ticket: 13,
    tary: 2000,
    total: "",
  },
  {
    type: "Gold",
    nb_ticket: 20,
    tary: 3000,
    total: "",
  },
];

const styleThead = {
  fontWeight: "normal",
  color: "#fff",
  fontSize: "15px",
  padding: "9px",
  bgcolor: "#291F43",
};

function GestionBillet() {
  const [billetData, setBilletData] = useState([]);
  const { control, handleSubmit } = useForm();

  useEffect(() => {
    setBilletData(() => tableBillet.map((b) => ({ ...b, desabled: true })));
  }, []);

  const ajouterNouveauBillet = () => {
    const nouveauBillet = { type: "", nb_ticket: "", tary: "", total: "" };
    setBilletData((b) => [...b, nouveauBillet]);
  };

  const supprimerBillet = (index) => {
    setBilletData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
        <HeaderAccueil />
      </Box>
      <Stack
        sx={{
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fbfbfb",
          width: "100%",
          padding: "20px 45px",
          height : "100svh"
        }}
      >
        <Stack direction="row" gap={2}  >
          <Box
            sx={{
              bgcolor: "#fff",
              width: "55%",
              borderRadius: "5px",
              padding: "10px 20px",
              boxShadow: 1
            }}
          >
            <Typography
              sx={{
                ":after": {
                  content: "''",
                  display: "block",
                  bgcolor: "grey",
                  width: "45px",
                  height: "3px",
                  mt: 0.5,
                  ml: 0.5,
                },
                fontSize: "20px",
              }}
            >
              Création de billet
            </Typography>

            <Box sx={{ mt: 2.5, mx: "auto" }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ bgcolor: "#F8F7FA" }}>
                    <TableRow>
                      <TableCell sx={styleThead} align="center">
                        Type de billet
                      </TableCell>
                      <TableCell sx={styleThead} align="center">
                        Nombre de ticket
                      </TableCell>
                      <TableCell sx={styleThead} align="center">
                        Tarif
                      </TableCell>
                      <TableCell sx={styleThead} align="center">
                        Total
                      </TableCell>
                      <TableCell sx={styleThead} align="center">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {billetData.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <ControlInput
                            control={control}
                            name={`type_${index}`}
                            defaultValue={row.type}
                          />
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <ControlInput
                            control={control}
                            name={`nb_ticket_${index}`}
                            defaultValue={row.nb_ticket}
                          />
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <ControlInput
                            control={control}
                            name={`tary_${index}`}
                            defaultValue={row.tary}
                          />
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <ControlInput
                            control={control}
                            name={`total_${index}`}
                            defaultValue={row.total}
                          />
                        </TableCell>

                        <TableCell align="right">
                          <Stack
                            gap={1}
                            direction="row"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <MdOutlineDelete
                              color="red"
                              size={25}
                              cursor="pointer"
                              onClick={() => supprimerBillet(index)}
                            />
                            <Box mt={0.8}>
                              <ModalAjoutArchive />
                            </Box>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
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
                </Box>
                <Box>
                  <Button
                    sx={{
                      border: "1px solid #291F43",
                      mt: 1,
                      fontSize: "14px",
                      padding: "3px 20px",
                    }}
                    onClick={handleSubmit((data) => console.log(data))}
                  >
                    Valider
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "45%" }}>
            <Box
              sx={{
                bgcolor: "#fff",
                width: "100%",
                height: "280px",
                borderRadius: "5px",
                padding: "10px 20px",
                boxShadow: 1,
              }}
            >
              <Typography
                sx={{
                  ":after": {
                    content: "''",
                    display: "block",
                    bgcolor: "grey",
                    width: "45px",
                    height: "3px",
                    mt: 0.5,
                    ml: 0.5,
                  },
                  fontSize: "20px",
                }}
              >
                Visuel
              </Typography>
              <Stack direction="rows">
                <Box sx={{ mt: 2.5, width: "50%" }}>
                  <Typography>
                    Nom de l'évenement :{" "}
                    <span style={{ fontWeight: "600" }}>Festivale</span>
                  </Typography>
                  <Typography sx={{ mt: 1, display: "block" }}>
                    Date de l'évenement :{" "}
                    <span style={{ fontWeight: "600" }}>01/02/2024</span>
                  </Typography>
                  <Typography sx={{ mt: 1, display: "block" }}>
                    Déscription de l'évenement :{" "}
                    <span style={{ fontFamily: "initial", display: "block" }}>
                      Pour cela, nous et nos partenaires pouvons stocker et
                      utiliser des informations non sensibles sur votre
                      appareil, comme des cookies
                    </span>
                  </Typography>
                </Box>
                <Box sx={{ width: "50%", height: "200px" }}>
                  <Box
                    sx={{
                      backgroundImage: `url(${saryQr})`,
                      width: "200px",
                      height: "200px",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default GestionBillet;
