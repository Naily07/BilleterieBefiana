import { Box, Stack, Typography } from "@mui/material";
import Headerc from "../../components/header/Headerc";
import affiche from "../../assets/event.jpeg";
import { useEffect, useState } from "react";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { useParams } from "react-router-dom";
import FunctionListelogo from "./component/listLogo";
import VenteTicket from "../../components/tickets/InputVenteTicket";
import InfoEvent from "./component/infoEvent";
import Partenaire from "./component/partenariat";
import { GetOneEvent } from "../../services/eventManagement";
import { ListTicketEvent } from "../../services/ticket";
import ModalBuy from "./component/ModalBuyTicket";
import { useForm } from "react-hook-form";
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

// const listTicket = [
//   {
//     typeTicket: "SIMPLE",
//     price: 5000,
//   },
//   {
//     typeTicket: "GOLD",
//     price: 7000,
//   },
//   {
//     typeTicket: "VIP",
//     price: 10000,
//   },
// ];

function SingleEvent() {
  const params = useParams();
  console.log(params.slug);
  const [totalPrice, setTotalPrice] = useState(0);
  const [detailEvent, setDetailEvent] = useState({});
  const [listTicket, setListTicket] = useState([]);
  const {register, watch, setValue} = useForm()
  useEffect(() => {
    GetOneEvent(params.slug)
      .then((res) => {
        console.log("res", res.data);
        setDetailEvent(res.data);
      })
      .catch((err) => setDetailEvent({}));
    ListTicketEvent(params.slug)
      .then((res) => setListTicket(res.data))
      .catch((err) => setListTicket([]));
  }, [params.slug]);
  
  
  return (
    <>
      <Headerc />
      {/* <Box sx={{ mt: 0.4, borderBottom: "2px solid gray" }}> */}
      <Stack
        mt={"8vh"}
        direction="rows"
        bgcolor={"#fbfbfb"}
        // sx={{ padding: "40px 0px 0px 0px" }}
        gap={10}
        justifyContent="center"
        alignItems={"center"}
        borderColor={"gray"}
        // borderRadius={"5px"}
        height={"92svh"}
      >
        <Box
          sx={{ width: "30%", display: "flex" }}
          // alignSelf={"self-start"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          bgcolor={"customWhite.main"}
          boxShadow={"0 0 10px rgba(0, 0, 0, 0.1)"}
          px={5}
          py={5}
        >
          <Box
            component={"img"}
            src={detailEvent.image}
            alt={params.slug}
            sx={{
              width: "100%",
              height: "auto",
              // mx: "auto",
            }}
          ></Box>
          {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent:"center", mt:"5px" }}>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#291F43",
                "&.MuiTypography-root::after": {
                  content: "''",
                  display: "block",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "gray",
                },
              }}
            >
              {detailEvent.nom}
            </Typography>
            <Typography
              sx={{ textTransform: "uppercase", ml: 1, fontWeight: "600" }}
            >
              {detailEvent.type_event}
            </Typography>
          </Box> */}
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexWrap: "wrap",
            // padding: "10px 0px",
            justifyContent: "center",
            // border: "1px solid black",
          }}
          p={5}
          bgcolor={"customWhite.main"}
          boxShadow={"0 0 10px rgba(0, 0, 0, 0.1)"}
        >
          <Stack
            width={"100%"}
            direction={"row"}
            sx={{ justifyContent: "space-between" }}
          >
            <InfoEvent detailEvent={detailEvent} />
            <Partenaire detailEvent={detailEvent} />
          </Stack>

          <Stack
            direction="row"
            flexWrap={"wrap"}
            width={"100%"}
            mt={5}
            justifyContent={"space-between"}
            sx={{
              // padding: "15px 70px",
              "&.MuiStack-root::before": {
                content: "''",
                display: "block",
                height: "1px",
                width: "100%",
                mb: 5,
                backgroundColor: "black",
              },
            }}
          >
            <Box
              sx={{
                width: "50%",
                padding: "0px 0px",
              }}
            >
              <Box>
                <Box
                  gap={1}
                  sx={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BsFillTicketPerforatedFill size={24} />
                  <Typography
                    sx={{
                      // textAlign: "center",
                      fontSize: "24px",
                      fontWeight: "600",
                    }}
                  >
                    Ticket
                  </Typography>
                </Box>
              </Box>
              {listTicket.length > 0 ? (
                listTicket.map((v, i) => (
                  <VenteTicket
                    setTotalPrice={setTotalPrice}
                    key={i}
                    price={v.prix}
                    typeTicket={v.type_ticket}
                    nb_ticket={v.nb_ticket}
                    register = {register}
                    setValue = {setValue}
                  />
                ))
              ) : (
                <Typography mt={2}>
                  {" "}
                  Pas de Tickets disponible pour l'instant
                </Typography>
              )}
            </Box>
            <Stack sx={{ width: "45%" }}>
              {/* <Box border={"1px solid"} borderColor={"gray"} borderRadius={"5px"} > */}
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  textAlign: "center",
                  // mb: 2,
                }}
              >
                Total
              </Typography>
              {/* <Box sx={{ width: "20px", height: "3px", bgcolor: "gray", mx: "auto" }}></Box> */}
              {/* </Box> */}
              <Box
                sx={{
                  width: "200px",
                  height: "50px",
                  bgcolor: "#F4F2FF",
                  mx: "auto",
                  mt: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px",
                }}
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                  {totalPrice} Ar
                </Typography>
              </Box>
              <ModalBuy totalPrice = {totalPrice} listTicket={listTicket} watch = {watch} />
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {/* </Box> */}
    </>
  );
}

export default SingleEvent;
