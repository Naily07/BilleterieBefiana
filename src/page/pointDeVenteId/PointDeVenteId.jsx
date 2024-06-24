import { useState } from "react"
import { Box, Stack, Typography, Button /*Checkbox*/ } from "@mui/material"
import Headerc from "../header/Headerc"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
import { MdClass } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Accordion from '@mui/material/Accordion';
//import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';


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

const functPrice = {
  prixT : 5000,
  prixT1 : 7500,
  prixT2 : 10000,
}

const functTypeTicket = {
  typyTicket : "SIMPLE",
  typyTicket1 : "GOLD",
  typyTicket2 : "VIP",
}


function calculateTotalPrice(price1, price2, price3) {
  return price1 + price2 + price3;
}

function PointDeVenteId() {

  
  const [prixT] = useState(5000);
  const [prixT1] = useState(7500);
  const [prixT2] = useState(10000);

  const [ compteur, setcompteur] = useState(0)
  const [ compteur1, setcompteur1] = useState(0)
  const [ compteur2, setcompteur2] = useState(0)
  //const [total, setTotal] = useState(0);

  const funincrement = ()=> {
    setcompteur(compteur + 1)
  }
  const fundecrement = ()=> {
    if (compteur > 0 ) {
      setcompteur(compteur - 1)
    }
  } 

  const funincrement1 = ()=> {
    setcompteur1(compteur1 + 1)
  }
  const fundecrement1 = ()=> {
    if (compteur1 > 0) {
      setcompteur1(compteur1 - 1)
    }
  }

  const funincrement2 = ()=> {
    setcompteur2(compteur2 + 1)
  }
  const fundecrement2 = ()=> {
    if (compteur2) {
      setcompteur2(compteur2 - 1)
    }
  }

  const totalPrice = calculateTotalPrice(
    prixT * compteur,
    prixT1 * compteur1,
    prixT2 * compteur2
  );

  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Headerc />
      <Box sx={{ width: "80%", height: "520px", mt: "3%", mx: "auto", border: "1px solid rgba(0, 0, 0, 0.10)" }}>
        <Stack direction= "rows" sx={{ padding :"20px 30px" }}>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ mb: 1.5, borderBottom: "1px solid rgba(0,0,0,0.10)", width: "200px", color: "#1E0A3C" }}>Selectionner un évènement</Typography>
            <select style={{ width: "210px", padding: "14px 20px", borderRadius: "3px", backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.10)"}} >
              <option value="">Makua Tour</option>
              <option value="">Festival</option>
              <option value="">Soirée</option>
              <option value="">Sport</option>
            </select>
            <Typography sx={{ mb: 1.5, mt: 2, borderBottom: "1px solid rgba(0,0,0,0.10)", width: "222px",color: "#1E0A3C" }}>Ticket disponible de l évèment</Typography>
            <Box>
              <TableContainer sx={{ minWidth: "190px", maxWidth: "350px", border: "1px solid rgba(0,0,0, 0.10)" }} >
                <Table sx={{ width: "100%" }} aria-label="simple table">
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
                      <TableCell sx={{ '&.MuiTableCell-root': { padding: "10px" } }} align="center">40</TableCell>
                      <TableCell align="center">60</TableCell>
                      <TableCell align="center">12</TableCell>
                    </TableRow>             
                  </TableBody>
                  </Table>
              </TableContainer>
            </Box>

            {/*SECTION TICKET*/}
            
            <Box sx={{ padding: "17px 0px" }}>
              <Typography sx={{ borderBottom: "1px solid rgba(0,0,0,0.10)", width: "50px",color: "#1E0A3C" }}>Ticket</Typography>
                <Box sx={{ display:"flex", alignItems: "center", flexDirection: "column", width: "400px", padding: "15px 0px" }}>
                {/*choixTicket()*/}
                  <Box gap={1} sx={{ display: "flex", alignItems: "center", width: "400px" }}>
                  <Box mt={2} sx={{ minWidth: "300px", height: "50px", bgcolor: "#fff", border: "1px solid rgba(0, 0, 0, 0.35)", display: "flex", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
                    <Typography ml={1}>{functTypeTicket.typyTicket}</Typography>
                    <Box sx={{ width: "45%", bgcolor: "#F4F2FF", height: "48px", display: "flex", alignItems:"center", justifyContent: "space-around", borderRadius: "5px" }}>
                          <Box onClick={fundecrement} sx={{ width: "30px", height: "30px", bgcolor: "#000", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Typography sx={{  color: "#fff", fontSize: "30px" }}>-</Typography>
                          </Box>
                          <Typography>{ compteur }</Typography>
                          <Box onClick={funincrement} sx={{ width: "30px", height: "30px", bgcolor: "#000", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Typography sx={{  color: "#fff", fontSize: "30px" }}>+</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box>
                    <Typography mt={2}>{functPrice.prixT} Ar</Typography>
                  </Box>
                </Box>
                
                <Box gap={1} sx={{ display: "flex", alignItems: "center", width: "400px"}}>
                  <Box mt={1} sx={{ minWidth: "300px", height: "50px", bgcolor: "#fff", border: "1px solid rgba(0, 0, 0, 0.35)", display: "flex", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
                    <Typography ml={1}>{functTypeTicket.typyTicket1}</Typography>
                    <Box sx={{ width: "45%", bgcolor: "#F4F2FF", height: "48px", display: "flex", alignItems:"center", justifyContent: "space-around", borderRadius: "5px" }}>
                          <Box onClick={fundecrement1} sx={{ width: "30px", height: "30px", bgcolor: "#000", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Typography sx={{  color: "#fff", fontSize: "30px" }}>-</Typography>
                          </Box>
                          <Typography>{compteur1}</Typography>
                          <Box onClick={funincrement1} sx={{ width: "30px", height: "30px", bgcolor: "#000", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Typography sx={{  color: "#fff", fontSize: "30px" }}>+</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box>
                    <Typography mt={2}>{functPrice.prixT1} Ar</Typography>
                  </Box>
                </Box>
                <Box gap={1} sx={{ display: "flex", alignItems: "center", width: "400px" }}>
                  <Box mt={1} sx={{ minWidth: "300px", height: "50px", bgcolor: "#fff", border: "1px solid rgba(0, 0, 0, 0.35)", display: "flex", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
                    <Typography ml={1}>{functTypeTicket.typyTicket2}</Typography>
                    <Box sx={{ width: "45%", bgcolor: "#F4F2FF", height: "48px", display: "flex", alignItems:"center", justifyContent: "space-around", borderRadius: "5px" }}>
                          <Box onClick={fundecrement2} sx={{ width: "30px", height: "30px", bgcolor: "#000", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Typography sx={{  color: "#fff", fontSize: "30px" }}>-</Typography>
                          </Box>
                          <Typography>{compteur2}</Typography>
                          <Box onClick={funincrement2} sx={{ width: "30px", height: "30px", bgcolor: "#000", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <Typography sx={{  color: "#fff", fontSize: "30px" }}>+</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box>
                    <Typography mt={2}>{functPrice.prixT2} Ar</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "50%", height: "470px", position: "relative" }}>
            <Box fullWidth sx={{ height: "20px", display: "flex", justifyContent: "flex-end" }}>
              <Typography sx={{ color: "#1E0A3C", fontWeight: "700", textAlign: "center" }}>Anicka Madson</Typography>
            </Box>
            <Typography sx={{ mt: 3, borderBottom: "1px solid rgba(0,0,0,0.35)", width: "160px", color: "#1E0A3C" }}>Détail de l évènement </Typography>
            <Box gap={2} sx={{ padding: "20px 0px", display: "flex", flexDirection: "column" }}>
              <Box gap={1} sx={{ display: "flex" }}>
                <MdClass size={20} />
                <Typography sx={{ fontSize: "14px" }}>Prestige : SOIREE</Typography>
              </Box>
              <Box gap={1} sx={{ display: "flex", alignItems: "center" }}>
                <FaLocationDot size={20} />
                <Typography sx={{ fontSize: "14px"}}>Localisation : Andavamamba</Typography>
              </Box>
              <Box gap={1} sx={{ display: "flex", alignItems: "center" }}>
                <BsFillCalendarDateFill />
                <Typography sx={{ fontSize: "14px"}}>Date : 10/06/2024</Typography>
              </Box>
              <Box gap={1} sx={{ display: "flex", alignItems: "center" }}>
                <MdAccessTimeFilled size={20}/>
                <Typography sx={{ fontSize: "14px"}}>Horaire : 08:30 jusq à 22:00</Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ borderBottom: "1px solid rgba(0,0,0,0.35)", width: "140px", color: "#1E0A3C" }}>Mode de payement</Typography>
              <Box gap={1} sx={{ padding:"20px 0px", width: "400px", display:"flex", flexDirection: "column" }}>
              <Box sx={{ width: "200px" }}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"     
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <span style={{ fontSize: "18px" }}>{totalPrice}</span> <Typography ml={1} style={{ fontSize: "18px" }}>Ar</Typography>
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
                          <FormControlLabel value="female" control={<Radio />} label="Mobile Money" />
                          <FormControlLabel value="male" control={<Radio />} label="Espèce" />
                        </RadioGroup>
                      </FormControl>  
                    </AccordionDetails>
                  </Accordion>      
                    
                </Box>
              </Box>
            </Box>
            <Box fullWidth sx={{ position: "absolute", bottom: 0, left: 0, zIndex: -1}}>
              <Button sx={{ width: "200px", height: "50px", border: "1px solid rgba(0,0,0,0.35)", textTransform: "Lowercase", bgcolor: "#1E0A3C", color: "#fff", padding: "5px 20px", '&:hover': { bgcolor: "#1E0A3C" } }}><span style={{ textTransform: "uppercase" }}>I</span>mprimer les tickets</Button>
            </Box>                   
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default PointDeVenteId