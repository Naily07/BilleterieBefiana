import { Box, Typography, Stack, Button } from "@mui/material";
import Headerc from "../../components/header/Headerc";
import saryparticiper from "../../assets/saryparticipe.png";
import saryorganiser from "../../assets/saryorganiser.png";

function SignupUserAccountType() {
  return (
    <>
      <Headerc />
      <Stack height={"100svh"} sx={{direction : "column", alignItems : "center", justifyContent : "center"}}>
        <Stack
          sx={{
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 0px",
          }}
        >
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: "700",
              mb: 5,
            }}
          >
            Bienvenue sur{" "}
            <span style={{ color: "#3D64FF" }}>BFBilleterie !!</span>
          </Typography>

          <Typography sx={{ fontSize: "20px" }}>
            Découvrez des événements extraordinaires ou vendez vos billets avec
            simplicité.
          </Typography>
        </Stack>

        <Stack
          direction="rows"
          sx={{
            // mt: 3.5,
            width: "55%",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "340px",
              height: "400px",
              border: "1px solid rgba(0, 0, 0, 0.10)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "50%",
                backgroundImage: `url(${saryparticiper})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundSize: "48%",
              }}
            ></Box>
            <Box
              sx={{ bgcolor: "#F4F2FF", height: "50%", padding: "40px 30px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "95%",
                  mx: "auto",
                }}
              >
                <Typography sx={{ fontSize: "13px", color: "#6E6893" }}>
                  Prêt à vivre des expériences uniques? Rejoignez-nous
                  maintenant pour découvrir et participer à des événements
                  passionnants!
                </Typography>
              </Box>
              <Box sx={{ mx: "auto", width: "175px", mt: 2 }}>
                <Button
                  sx={{
                    color: "#000",
                    bgcolor: "#fff",
                    padding: "9px 55px",
                    textTransform: "lowercase",
                    border: "1px solid rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <span style={{ textTransform: "uppercase" }}>p</span>articiper
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "340px",
              height: "400px",
              border: "1px solid rgba(0, 0, 0, 0.10)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "50%",
                backgroundImage: `url(${saryorganiser})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              sx={{ bgcolor: "#F4F2FF", height: "50%", padding: "40px 30px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "95%",
                  mx: "auto",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#6E6893",
                    textAlign: "center",
                  }}
                >
                  Prêt à vivre des expériences uniques? Rejoignez-nous
                  maintenant pour découvrir et participer à des événements
                  passionnants!
                </Typography>
              </Box>
              <Box sx={{ mx: "auto", width: "175px", mt: 2 }}>
                <Button
                  sx={{
                    color: "#000",
                    bgcolor: "#fff",
                    padding: "9px 55px",
                    textTransform: "lowercase",
                    border: "1px solid rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <span style={{ textTransform: "uppercase" }}>o</span>rganiser
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default SignupUserAccountType;
