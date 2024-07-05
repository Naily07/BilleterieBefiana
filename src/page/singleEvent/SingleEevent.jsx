import { Box, Stack, Typography } from "@mui/material";
import Headerc from "../../components/header/Headerc";
import affiche from "../../assets/event.jpeg";
import { useState } from "react";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { useParams } from "react-router-dom";
import FunctionListelogo from "./component/listLogo";
import AddTicket from "./component/AddTicket";
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

function SingleEevent() {
  const params = useParams();
  console.log(params.slug);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <Headerc />
      {/* <Box sx={{ mt: 0.4, borderBottom: "2px solid gray" }}> */}
      <Stack
        direction="rows"
        sx={{ padding: "40px 0px 0px 0px" }}
        justifyContent="center"
        borderColor={"gray"}
        borderRadius={"5px"}
      >
        <Box
          sx={{ width: "50%", display: "flex" }}
          alignSelf={"self-start"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Box
            component={"img"}
            src="/static/event.jpeg"
            alt={params.slug}
            sx={{
              width: "50%",
              mx: "auto",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexWrap: "wrap",
            padding: "10px 0px",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
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
                Préstige :
              </Typography>
              <Typography
                sx={{ textTransform: "uppercase", ml: 1, fontWeight: "600" }}
              >
                Soirée
              </Typography>
            </Box>
            <Stack sx={{ mt: 2 }} gap={3}>
              <Box gap={1} sx={{ display: "flex", alignItems: "center" }}>
                <FaLocationDot />
                <Typography>Ivandry</Typography>
              </Box>
              <Box
                mt={1}
                gap={1}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <BsFillCalendarDateFill />
                <Typography>20 Jiun</Typography>
              </Box>
              <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                <MdAccessTimeFilled size={20} />
                <Typography ml={0.5}>Heurre de début: 20h </Typography>
                <Typography>Jusqu à: 23h </Typography>
              </Box>
            </Stack>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ fontSize: "20px", color: "#291F43" }}>
              Partenaires
            </Typography>
            <Box sx={{ width: "85px", height: "5px", bgcolor: "gray" }}></Box>
            <Stack
              gap={2}
              direction="row"
              flexWrap={"wrap"}
              alignItems={"center"}
              marginTop={2}
            >
              <FunctionListelogo />
            </Stack>
          </Box>
          <Stack
            direction="row"
            flexWrap={"wrap"}
            width={"100%"}
            mt={2}
            sx={{
              // padding: "15px 70px",
              "&.MuiStack-root::before": {
                content: "''",
                display: "block",
                height: "1px",
                width: "90%",
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
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BsFillTicketPerforatedFill size={24} />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "24px",
                      fontWeight: "600",
                    }}
                  >
                    Ticket
                  </Typography>
                </Box>
              </Box>
              {listTicket.map((v, i) => (
                <AddTicket
                  setTotalPrice={setTotalPrice}
                  key={i}
                  price={v.price}
                  typeTicket={v.typeTicket}
                />
              ))}
            </Box>
            <Stack sx={{ width: "45%" }} >
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
              <Box>
                <Box
                  sx={{
                    width: "300px",
                    height: "50px",
                    bgcolor: "#fff",
                    border: "1px solid rgba(0, 0, 0, 0.35)",
                    mx: "auto",
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    borderRadius: "5px",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#F4F2FF" },
                  }}
                >
                  <Typography>Acheter avec </Typography>
                  <Typography sx={{ color: "orange" }}>Orange Money</Typography>
                </Box>
                <Box
                  sx={{
                    width: "300px",
                    height: "50px",
                    bgcolor: "#fff",
                    border: "1px solid rgba(0, 0, 0, 0.35)",
                    mx: "auto",
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    borderRadius: "5px",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#F4F2FF" },
                  }}
                >
                  <Typography>Acheter avec </Typography>
                  <Typography sx={{ color: "green" }}>Telma MVola</Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {/* </Box> */}
    </>
  );
}

export default SingleEevent;
