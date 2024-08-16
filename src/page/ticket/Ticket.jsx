import Headera from "../../components/header/HeaderAccueil";
import { Box, Stack, Typography } from "@mui/material";
import HeaderbUser from "../../components/header/HeaderbUser";
import TicketModal from "../modaltelechargeTicket/TicketModal";
import saryA from "../../assets/event1.jpg";
import saryB from "../../assets/image2.jpg";
import saryC from "../../assets/event3.jpg";
import Headerc from "../../components/header/Headerc";

const listTicket = [
  {
    typeTicket: "Simple",
    nbTicket: 2,
    imageev: saryA,
  },
  {
    typeTicket: "Gold",
    nbTicket: 4,
    imageev: saryB,
  },
  {
    typeTicket: "Vip",
    nbTicket: 3,
    imageev: saryC,
  },
];

const ctnListTicket = () => {
  return (
    <>
      {listTicket.map((vl, id) => (
        <Box
          key={id}
          sx={{
            width: "410px",
            height: "175px",
            margin: "5px",
            borderRadius: "5px",
            border: "1px solid rgba(0,0,0,0.35)",
            "&:hover": { translate: "sc" },
            flexGrow : 1
          }}
        >
          <Stack direction="rows" sx={{ position: "relative" }}>
            <Box
              sx={{
                width: "40%",
                height: "175px",
                backgroundImage: `url(${vl.imageev})`,
                borderRadius: "5px 0px 0px 5px",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box sx={{ width: "60%", height: "175px", padding: "15px 10px" }}>
              <Box sx={{ display: "flex" }}>
                <Typography>Type de Billet : </Typography>
                <Typography
                  ml={1}
                  sx={{
                    textTransform: "uppercase",
                    color: "#291F43",
                    fontWeight: "600",
                  }}
                >
                  {vl.typeTicket}
                </Typography>
              </Box>
              <Box>
                <Typography mt={1}>
                  Nombre de ticket : <span style={{ fontWeight: "600" }}></span>{" "}
                  {vl.nbTicket}
                </Typography>
              </Box>
              <Box sx={{ /*position: "absolute",*/ right: "13px", bottom: "15px"/*, bgcolor: "red"*/, marginTop: "30%" }}>
                <TicketModal
                  typeTicket={vl.typeTicket}
                  nbTicket={vl.nbTicket} 
                ></TicketModal>
              </Box>
            </Box>
          </Stack>
        </Box>
      ))}
    </>
  );
};

function Ticket() {
  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
        <Headerc />
        {/* <HeaderbUser /> */}
      </Box>
      <Box sx={{ padding: "0px 30px", mt: 20 }}>
        <Box
          sx={{
            /*bgcolor: "yellow"*/ display: "flex",
            flexWrap: "wrap",
            padding: "0px 20px",
          }}
        >
          {ctnListTicket()}
        </Box>
      </Box>
    </>
  );
}

export default Ticket;
