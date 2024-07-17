import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button /*Checkbox*/,
  MenuItem,
  Select,
  Icon,
} from "@mui/material";
import Headerc from "../../components/header/Headerc";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { PiPrinter } from "react-icons/pi";
import VenteTicket from "../../components/tickets/InputVenteTicket";
import { MdOutlineAccessTime } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePartyMode } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Bar from "./component/bar";
import pattern from "../../assets/pattern.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import UserTopBar from "./component/usertopBar";

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

const listTicket = [
  {
    typeTicket: "SIMPLE",
    price: 5000,
  },
  {
    typeTicket: "GOLD",
    price: 7000,
  },
  {
    typeTicket: "VIP",
    price: 10000,
  },
];

const listEvent = [{ nom: "Makua tour" }, { nom: "Miss Mada" }];

function PointDeVenteId() {
  const [totalPrice, setTotalPrice] = useState(0);

  const [value, setValue] = useState("female");
  const [selectedEvent, setSelectEvent] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handelChangeEvent = (event) => {
    console.log(event);
    setSelectEvent(event.target.value);
  };
  return (
    <>
      <Headerc />
      <Stack
        zIndex={0}
        direction={"rows"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"92svh"}
      >
        <Stack
          direction={"row"}
          width={"auto"}
          height={"auto"}
          gap={2}
          bgcolor={"#fff"}
          zIndex={1}
        >
          {/* <Bar /> */}
          <Stack
            sx={{
              // width: "60%",
              minWidth: "900px",
              gap: 3,
              mx: "auto",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.10)",
              padding: "40px",
              borderRadius: "20px",
            }}
          >
            <UserTopBar /> 
            {/* Left   */}
            <Stack direction="rows" gap={5}>
              <Stack sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    mb: 1.1,
                    width: "220px",
                    color: "#1E0A3C",
                    fontWeight: "600",
                  }}
                >
                  Selectionner un évènement
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedEvent}
                  sx={{
                    width: "350px",
                    height: "45px",
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
                <Typography
                  sx={{
                    mb: 1.1,
                    mt: 2,
                    width: "260px",
                    color: "#1E0A3C",
                    fontWeight: "600",
                  }}
                >
                  Ticket disponible de l'évènement
                </Typography>
                <Box>
                  <TableContainer
                    sx={{
                      minWidth: "190px",
                      maxWidth: "350px",
                      border: "1px solid rgba(0,0,0, 0.10)",
                    }}
                  >
                    <Table sx={{ width: "100%" }} aria-label="simple table">
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
                                "&.MuiTableCell-root": { padding: "10px" },
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
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          {["40", "50", "60"].map((item, i) => {
                            return (
                              <TableCell
                                sx={{
                                  "&.MuiTableCell-root": { padding: "10px" },
                                }}
                                align="center"
                              >
                                {item}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>

                {/*SECTION right*/}

                <Box sx={{ padding: "15px 0px" }}>
                  <Typography
                    sx={{ width: "50px", color: "#1E0A3C", fontWeight: "600" }}
                  >
                    Ticket
                  </Typography>
                  {listTicket.map((v, i) => (
                    <VenteTicket
                      setTotalPrice={setTotalPrice}
                      key={i}
                      price={v.price}
                      typeTicket={v.typeTicket}
                    />
                  ))}
                </Box>
              </Stack>

              <Stack
                sx={{
                  width: "50%",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    width: "200px",
                    color: "#1E0A3C",
                    fontWeight: "600",
                  }}
                >
                  Détail de l'évènement
                </Typography>
                <Box
                  gap={2}
                  sx={{
                    padding: "20px 0px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box gap={1} sx={{ display: "flex" }}>
                    <MdOutlinePartyMode size={20} />
                    <Typography sx={{ fontSize: "14px" }}>
                      Prestige : SOIREE
                    </Typography>
                  </Box>
                  <Box gap={1} sx={{ display: "flex", alignItems: "center" }}>
                    <LuMapPin size={20} />
                    <Typography sx={{ fontSize: "14px" }}>
                      Lieu : Andavamamba
                    </Typography>
                  </Box>
                  <Box gap={1} sx={{ display: "flex", alignItems: "center" }}>
                    <MdOutlineCalendarMonth size={20} />
                    <Typography sx={{ fontSize: "16px" }}>
                      Date : 10/06/2024
                    </Typography>
                  </Box>
                  <Box gap={1} sx={{ display: "flex", alignItems: "center" }}>
                    <MdOutlineAccessTime size={20} />
                    <Typography sx={{ fontSize: "14px" }}>
                      Horaire : 08:30 jusque 22:00
                    </Typography>
                  </Box>
                </Box>
                <Box mt={5}>
                  <Typography
                    variant="p"
                    sx={{
                      width: "190px",
                      color: "#1E0A3C",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    Mode de payement
                  </Typography>
                  <Box
                    gap={1}
                    sx={{
                      padding: "20px 0px",
                      // width: "400px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ width: "200px" }}>
                      <Accordion sx={{ zIndex: 1 }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <span style={{ fontSize: "18px" }}>
                              {totalPrice}
                            </span>
                            <Typography ml={1} style={{ fontSize: "18px" }}>
                              Ar
                            </Typography>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={value}
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Mobile Money"
                              />
                              <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Espèce"
                              />
                            </RadioGroup>
                          </FormControl>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </Box>
                </Box>
                <Button
                  sx={{
                    border: "1px solid rgba(0,0,0,0.35)",
                    bgcolor: "#1E0A3C",
                    color: "#fff",
                    padding: "5px 20px",
                    "&:hover": { bgcolor: "#1E0A3C" },
                    textTransform: "capitalize",
                    // position: "absolute",
                  }}
                  startIcon={<PiPrinter color="#fff" size={20} />}
                >
                  {/* <PiPrinter color="#fff" size={20} /> */}
                  imprimer les Tickets
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            zIndex: -1,
            bottom: "0px",
            left: "15%",
            width: "25%",
            height: "250px",
            backgroundImage: "url(" + pattern + ")",
          }}
        ></Box>
      </Stack>
    </>
  );
}

export default PointDeVenteId;
