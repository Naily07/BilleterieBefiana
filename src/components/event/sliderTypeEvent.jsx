import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import saryA from "../../assets/event1.jpg";
import saryB from "../../assets/image2.jpg";
import saryC from "../../assets/event3.jpg";

const styleTypeev = {
  color: "#fff",
  fontSize: "18px",
  position: "absolute",
  bottom: "15px",
  fontWeight: "700",
  "&.MuiTypography-root::after": {
    display: "block",
    content: "''",
    height: "2px",
    width: "100%",
    bgcolor: "secondary.main",
    },
};

const dataslide = [
  { img: saryA, title: "Festival" },
  { img: saryB, title: "Foire" },
  { img: saryC, title: "Festival" },
  { img: saryA, title: "Festival" },
  { img: saryB, title: "Foire" },
  { img: saryC, title: "Festival" },
];

export default function SliderAccueil() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Box sx={{ py: "0px", mt: "75px" }}>
        <Box sx={{ padding: "10px 0px", mb: 2, mt: 2 }}>
          <Typography
            sx={{
              color: "#291F43",
              fontWeight: "700",
              fontSize: "25px",
              ml: 2,
              "&.MuiTypography-root::after": {
                display: "block",
                content: "''",
                ml: 2,
                height: "2px",
                width: "3%",
                bgcolor: "primary.main",
              },
            }}
          >
            Pour vous{" "}
          </Typography>
        </Box>

        <Box sx={{ padding: "5px 20px" }}>
          <Slider {...settings}>
            {dataslide.map((item, index) => {
              return (
                <Box
                  sx={{
                    maxWidth: "300px",
                    height: "170px",
                    // backdropFilter: "blur(10px)",
                  }}
                  key={index}
                >
                  <Box
                    sx={{
                      width: "auto%",
                      height: "100%",
                      backgroundImage: `linear-gradient(rgba(30, 10, 60, 0), rgba(30, 10, 60, 0.8)), url(${item.img})`,
                      backgroundSize: "cover",
                      borderRadius: "20px",
                      padding: "0px 0px 0px 20px",
                      "&:hover": { bgcolor: "red", cursor: "pointer" },
                    }}
                  >
                    <Typography sx={styleTypeev}>{item.title}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </>
  );
}
