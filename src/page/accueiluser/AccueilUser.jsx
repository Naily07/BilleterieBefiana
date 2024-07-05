import Headera from "../../components/header/HeaderAccueil";
import { Box, Typography } from "@mui/material";
import HeaderbUser from "../../components/header/HeaderbUser";
import saryA from "../../assets/event1.jpg";
import saryB from "../../assets/image2.jpg";
import saryC from "../../assets/event3.jpg";
import Slider from "react-slick";
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
        <Headera />
        <HeaderbUser />
      </Box>
      <Box sx={{ padding: "0px 30px", mt: 20 }}>
        <Box sx={{ padding: "10px 0px", mb: 2, mt: 2 }}>
          <Typography
            sx={{
              color: "#291F43",
              fontWeight: "700",
              fontSize: "25px",
              ml: 2,
            }}
          >
            Pour vous
          </Typography>
        </Box>
        <Box sx={{ padding: "5px 20px" }}>
          <Slider {...settings}>
            <Box sx={{ maxWidth: "300px", height: "200px" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${saryA})`,
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  padding: "0px 0px 0px 20px",
                  "&:hover": { bgcolor: "red", cursor: "pointer" },
                }}
              >
                <Typography sx={styleTypeev}>Festivale</Typography>
              </Box>
            </Box>
            <Box sx={{ maxWidth: "300px", height: "200px" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${saryB})`,
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  padding: "0px 0px 0px 20px",
                }}
              >
                <Typography sx={styleTypeev}>Foire</Typography>
              </Box>
            </Box>
            <Box sx={{ maxWidth: "300px", height: "200px" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${saryC})`,
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  padding: "0px 0px 0px 20px",
                }}
              >
                <Typography sx={styleTypeev}>Carnaval</Typography>
              </Box>
            </Box>
            <Box sx={{ maxWidth: "300px", height: "200px" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${saryB})`,
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  padding: "0px 0px 0px 20px",
                }}
              >
                <Typography sx={styleTypeev}>Soirée</Typography>
              </Box>
            </Box>
          </Slider>
        </Box>

        <Box
          sx={{
            width: "200px",
            height: "5px",
            bgcolor: "#291F43",
            mt: 4,
            mx: "auto",
            mb: 3,
          }}
        ></Box>

        <Box
          display={"flex"}
          sx={{ justifyContent: "space-around", padding: "0px 18px" }}
        >
          {cardTypeEvenement()}
        </Box>

        <Box sx={{ height: "500px" }}></Box>
      </Box>
      <Footer />
    </>
  );
}

export default AccueilUser;
