import { Box, Stack, Typography } from "@mui/material"
import Headerc from "../header/Headerc"
import affiche from "../../assets/event3.jpg"
import { useState } from "react"
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import logoTelma from "../../assets/logo/id3lrheCqW.jpeg"
import logoorange from "../../assets/logo/Orange-logo.jpg"
import logoairtel from "../../assets/logo/Airtel-logo.png"

/*
const typeTicket = [
  {
    typeT : "SIMPLE",
    prixT : "5000",
  },
  {
    typeT : "GOLD",
    prixT : "7000",
  },
  {
    typeT : "VIP",
    prixT : "10000",
  }
]
*/

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


function SingleEevent() {

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
    setcompteur(compteur - 1)
  }

  const funincrement1 = ()=> {
    setcompteur1(compteur1 + 1)
  }
  const fundecrement1 = ()=> {
    setcompteur1(compteur1 - 1)
  }

  const funincrement2 = ()=> {
    setcompteur2(compteur2 + 1)
  }
  const fundecrement2 = ()=> {
    setcompteur2(compteur2 - 1)
  }


  /*
  const choixTicket = ()=> {
    return (
      <>
        {
          typeTicket.map((v,i)=>(
            <Box key={i} gap={2} sx={{ display: "flex", alignItems: "center", width: "400px" }}>
              <Box mt={2} sx={{ minWidth: "300px", height: "50px", bgcolor: "#fff", border: "1px solid rgba(0, 0, 0, 0.35)", display: "flex", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
                <Typography ml={1}>{v.typeT}</Typography>
                <Box sx={{ width: "45%", bgcolor: "#F4F2FF", height: "48px", display: "flex", alignItems:"center", justifyContent: "space-around", borderRadius: "5px" }}>
                  <Box onClick={fundecrement} sx={{ width: "30px", height: "30px", bgcolor: "#000", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <Typography sx={{  color: "#fff", fontSize: "30px" }}>-</Typography>
                  </Box>
                  <Typography>{compteur}</Typography>
                  <Box onClick={funincrement} sx={{ width: "30px", height: "30px", bgcolor: "#000", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <Typography sx={{  color: "#fff", fontSize: "30px" }}>+</Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography mt={2}>{v.prixT} Ar</Typography>
              </Box>
            </Box>
          ))
        }
      </>
    )
  }
  */

const funlogo = [
  {
    logo: logoTelma,
  },
  {
    logo: logoorange,
  },
  {
    logo: logoairtel
  }
]

const functionListelogo = ()=>{
  return(
    <>
      {
       funlogo.map((vlogo, ilogo)=>(
        <Box key={ilogo}>
          <Box sx={{ width: "50px", height: "50px", backgroundImage: `url(${vlogo.logo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></Box>
        </Box>
       )) 
      }
    </>
  )
}

/*
useEffect(() => {
  // Calculer le total et le mettre à jour
  const totalValue = compteur + compteur1 + compteur2;
  setTotal(totalValue);
}, [compteur, compteur1, compteur2]);*/

  // Calcul du total des prix
  const totalPrice = calculateTotalPrice(
    prixT * compteur,
    prixT1 * compteur1,
    prixT2 * compteur2
  );
  
  return (
    <>
      <Headerc />
      <Box sx={{ mt: 0.4, borderBottom: "2px solid gray" }}>
        <Stack direction="rows" sx={{ padding: "5px 0px" }}>
          <Box sx={{ width: "50%", display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "45%", height: "260px", backgroundImage: `url(${affiche})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", mx: "auto", borderRadius: "3px" }}></Box>
          </Box>
          <Box sx={{ width: "50%", display: "flex", padding: "10px 0px" }}>
            <Box sx={{ width: "50%" }}>
              <Box sx={{ display: "flex", alignItems: "center",height: "40px" }}>
                <Typography sx={{ fontSize: "20px", color: "#291F43" }}>Préstige : </Typography>
                <Typography sx={{ textTransform: "uppercase", ml: 1 }}>Soirée</Typography>
              </Box>
              <Box sx={{ width: "85px", height: "5px", bgcolor: "gray" }}></Box>
              <Box sx={{ mt: 2 }}>
                <Box gap={1} sx={{ display: "flex", alignItems: "center" }}>
                  <FaLocationDot />
                  <Typography>Ivandry</Typography>
                </Box>
                <Box mt={1} gap={1} sx={{ display: "flex", alignItems: "center" }}>
                  <BsFillCalendarDateFill />
                  <Typography>20 Jiun</Typography>
                </Box>
                <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                  <MdAccessTimeFilled size={20} />
                  <Typography ml={0.5} >Heurre de début: 20h </Typography>
                  <Typography >Jusqu à: 23h </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography sx={{ fontSize: "20px", color: "#291F43" }} >Partenaires</Typography>
              <Box sx={{ width: "85px", height: "5px", bgcolor: "gray" }}></Box>
              <Box gap={2} sx={{ width: "200px", bgcolor: "gray", mt: 2, display: "flex", padding: "5px 10px" }}>
                {functionListelogo()}
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Stack direction="rows" sx={{ padding: "15px 70px" }}>
          <Box sx={{ width: "50%", padding: "0px 20px" }}>
            <Box>
              <Box gap={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <BsFillTicketPerforatedFill size={24} />
                <Typography sx={{ textAlign: "center", fontSize: "20px" }}>Ticket</Typography>
              </Box>         
              <Box sx={{ width: "25px", height: "3px", bgcolor: "gray", mx: "auto" }}></Box>
            </Box>
            <Box>
              <Box sx={{ display:"flex", alignItems: "center", flexDirection: "column" }}>
                {/*choixTicket()*/}
                <Box gap={2} sx={{ display: "flex", alignItems: "center", width: "400px" }}>
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
                <Box gap={2} sx={{ display: "flex", alignItems: "center", width: "400px" }}>
                  <Box mt={2} sx={{ minWidth: "300px", height: "50px", bgcolor: "#fff", border: "1px solid rgba(0, 0, 0, 0.35)", display: "flex", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
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
                <Box gap={2} sx={{ display: "flex", alignItems: "center", width: "400px" }}>
                  <Box mt={2} sx={{ minWidth: "300px", height: "50px", bgcolor: "#fff", border: "1px solid rgba(0, 0, 0, 0.35)", display: "flex", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
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
          <Box sx={{ width: "50%" }}>
            <Box>
              <Typography sx={{ textAlign: "center", fontSize: "20px" }}>Total</Typography>
              <Box sx={{ width: "20px", height: "3px", bgcolor: "gray", mx: "auto" }}></Box>
            </Box>
            <Box sx={{ width: "200px", height: "50px", bgcolor: "#F4F2FF", mx: "auto", mt: 1.5, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "5px" }}>
              <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>{totalPrice} Ar</Typography>
            </Box>
            <Box>
              <Box sx={{ width: "300px", height: "50px", bgcolor: "#fff", border: "1px solid rgba(0, 0, 0, 0.35)", mx: "auto", mt: 2, display: "flex", alignItems: "center", justifyContent: "space-around", borderRadius: "5px", cursor: "pointer", '&:hover':{ bgcolor: "#F4F2FF"} }}>
                <Typography>Acheter avec </Typography>
                <Typography sx={{ color: "orange" }}>Orange Money</Typography>
              </Box>
              <Box sx={{ width: "300px", height: "50px", bgcolor: "#fff", border: "1px solid rgba(0, 0, 0, 0.35)", mx: "auto", mt: 2, display: "flex", alignItems: "center", justifyContent: "space-around", borderRadius: "5px", cursor: "pointer", '&:hover':{ bgcolor: "#F4F2FF"} }}>
                <Typography>Acheter avec </Typography>
                <Typography sx={{ color: "green" }}>Telma MVola</Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
    </>
  )
}

export default SingleEevent