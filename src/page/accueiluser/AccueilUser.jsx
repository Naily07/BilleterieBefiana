import Headera from "../../components/header/HeaderAccueil";
import { Box, Typography } from "@mui/material";
import HeaderbUser from "../../components/header/HeaderbUser";
import saryA from "../../assets/event1.jpg";
import saryB from "../../assets/image2.jpg";
import saryC from "../../assets/event3.jpg";
import SliderAccueil from "../../components/event/sliderTypeEvent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/footer/Footer";

const typeEvenement = [
  {
    typeev: "Sport",
    imageev: saryA,
  },
  {
    typeev: "Soirée",
    imageev: saryB,
  },
  {
    typeev: "Festivale",
    imageev: saryC,
  },
  {
    typeev: "Soirée",
    imageev: saryB,
  },
];

const cardTypeEvenement = () => {
  return (
    <>
      {typeEvenement.map((v, i) => (
        <Box
          key={i}
          sx={{
            width: "300px",
            height: "200px",
            bgcolor: "grey",
            backgroundImage: `url(${v.imageev})`,
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <Typography>{v.typeev}</Typography>
        </Box>
      ))}
    </>
  );
};

const styleTypeev = {
  color: "#fff",
  fontSize: "18px",
  position: "absolute",
  bottom: "15px",
};

function AccueilUser() {
  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
        <Headera />
        <HeaderbUser />
      </Box>
      <Box sx={{ padding: "0px 30px", mt: 20 }}>
        
        <SliderAccueil /> 

        <Box sx={{ height: "500px" }}></Box>
      </Box>
      <Footer />
    </>
  );
}

export default AccueilUser;
