import { useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
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
import { useForm } from "react-hook-form";
import InputTicket from "./inputTicket";
const tabEvent = [
  {
    typeBille: "Simple",
  },
  {
    typeBille: "Silver",
  },
  {
    typeBille: "Gold",
  },
];

const listEvent = [{ nom: "Makua tour" }, { nom: "Miss Mada" }];

const ticketforms = [
  {
    register: "simple",
    defaultValue: 0, 
  },
  {
    register : 'gold',
    defaultValue : 0,
  },
  {
    register : 'silver',
    defaultValue : 0,
  }
]

export default function TicketTableau() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [event, setEvent] = useState("");
  const handelChangeEvent = (event) => {
    if (event.target.value) setEvent(event.target.value);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box
      sx={{
        minWidth: "35%",
        bgcolor: "#fff",
        borderRadius: "5px",
        border: "1px solid rgba(0, 0, 0, 0.10) ",
        padding: "0px 0px 20px 0px",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            height: "40px",
            alignItems: "center",
            padding: "25px 25px",
            bgcolor: "#fff",
          }}
        >
          <Typography
            sx={{ color: "#1E0A3C", fontWeight: "700", fontSize: "16px" }}
          >
            Anicka Nome
          </Typography>
        </Box>
        <Stack sx={{ padding: "0px 25px" }}>
          {/* <Typography sx={{ mb: 1.5, fontSize: "14px"}}>
                      Selectionner un évèment
                    </Typography> */}
          <InputLabel id="demo-simple-select-label">
            Selectionner un évèment
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={event}
            sx={{
              height : "50px"
            }}
            label="Age"
            onChange={handelChangeEvent}
          >
            {listEvent.map((item) => {
              return (
                <MenuItem value={item.nom} key={item}>
                  {item.nom}
                </MenuItem>
              );
            })}
          </Select>

          <Typography sx={{ mt: 1.7, fontSize: "18px", mb: 1.5 }}>
            Ticket displonible de lévènement
          </Typography>
          <Box>
            <TableContainer sx={{ border: "1px solid rgba(0,0,0, 0.10)" }}>
              <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ bgcolor: "#F4F2FF" }}>
                    {tabEvent.map((type, i) => (
                      <TableCell
                        key={i}
                        align="center"
                        sx={{
                          color: "#6E6893",
                          fontWeight: "500",
                          textTransform: "uppercase",
                          "&.MuiTableCell-root": {
                            padding: "10px",
                          },
                        }}
                      >
                        {type.typeBille}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        "&.MuiTableCell-root": {
                          padding: "10px",
                        },
                      }}
                      align="center"
                    >
                      50
                    </TableCell>
                    <TableCell align="center">60</TableCell>
                    <TableCell align="center">12</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Typography sx={{ mt: 1.7, fontSize: "18px", mb: 1.5 }}>
            Ticket du point de vente
          </Typography>
          <Box>
            <TableContainer sx={{ border: "1px solid rgba(0,0,0, 0.10)" }}>
              <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ bgcolor: "#F4F2FF" }}>
                    {tabEvent.map((typB, i) => (
                      <TableCell
                        key={i}
                        align="center"
                        sx={{
                          color: "#6E6893",
                          fontWeight: "500",
                          textTransform: "uppercase",
                          "&.MuiTableCell-root": {
                            padding: "10px",
                          },
                        }}
                      >
                        {typB.typeBille}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    {ticketforms.map((item, i) => (
                      <TableCell
                        key={i}
                        align="center"
                        sx={{
                          color: "#6E6893",
                          fontWeight: "500",
                          textTransform: "uppercase",
                          "&.MuiTableCell-root": {
                            padding: "10px",
                          },
                        }}
                      >

                        <InputTicket register = {register} registerName={item.register} defaultValue={item.defaultValue} />
                        
                      </TableCell>
                    ))}
                    
                    {/* <TableCell align="center">
                      <TextField
                        type="number"
                        size="small"
                        sx={{ maxWidth: "100px" }}
                      />
                    </TableCell> */}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
        <Box sx={{ mx: "auto", width: "90px", mt: 2.1 }}>
          <Button
          type="submit"
            sx={{
              color: "#000",
              textTransform: "lowercase",
              border: "1px solid rgba(0, 0, 0, 0.35)",
              padding: "5px 30px",
              borderRadius: "5px",
            }}
          >
            <span style={{ textTransform: "uppercase" }}>V</span>alider
          </Button>
        </Box>
      </form>
    </Box>
  );
}
