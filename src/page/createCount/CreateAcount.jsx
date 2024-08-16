import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import Headerc from "../../components/header/Headerc";
import { FcGoogle } from "react-icons/fc";
import saryP from "../../assets/saryf.svg";
import { LogoDev } from "@mui/icons-material";
// import logo from '../../assets/logo.svg'

function CreateAcount() {
  const logGoogle = () => {
    const a = `https://accounts.google.com/o/oauth2/v2/auth?scope=email&access_type=online&response_type=code&redirect_uri=${encodeURIComponent(
      "http://localhost:5173/accueil"
    )}&client_id=${encodeURIComponent(
      "302579460-rni4mhlau2fodrepb2s9gtsq9qeptup2.apps.googleusercontent.com"
    )}`;
    window.location.replace(a);
  };
  return (
    <>
      <Stack
        sx={{
          backgroundImage: "",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fbfbfb",
        }}
      >
        {/* <Headerc /> */}
        <Box zIndex={999}>
          <Stack
            sx={{
              mx: "auto",
              maxWidth: "500px",
              direction: "column",
              alignItems: "center",
              borderRadius: "5px",
              padding: "40px 20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.10)",
            }}
          >
            <LogoDev  sx={{fontSize : "80px", color: "#1E0A3C", mb : 3 }} /> 
            <Stack
              sx={{
                alignItems: "center",
                borderRadius: "5px",
                width: "90%",
              }}
            >
              <Typography
                variant="h5"
                alignSelf={"center"}
                textAlign={"center"}
                fontFamily={"Poppins"}
                fontWeight={"bold"}
              >
                Connectez-vous maintenant et ne manquez plus jamais un événement
                passionnant !
              </Typography>
              <Divider
                sx={{ width: "30%", height: "1px", bgcolor: "grey", m: 2 }}
              />
            </Stack>
            {/* <Stack
              sx={{
                width: "100%",
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            > */}
            {/* <Typography sx={{ fontSize: "20px" }}>
              <span style={{ color: "blue" }}>Commençons</span> à crée votre
              compte!
            </Typography> */}

            {/* </Stack> */}
            {/* <Box
              sx={{
                width: "90%",
                height: "50px",
                mx: "auto",
                mt: 0.8,
                mb: 2,
                border: "1px solid rgba(0, 0, 0, 0.20)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                padding: "0px 40px",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#F4F2FF" },
                borderRadius: "25px",
              }}
            >
              <FcGoogle size={25} />
              <Typography>Signup With Google</Typography>
            </Box> */}
            <Button
              startIcon={<FcGoogle />}
              variant="outlined"
              sx={{
                alignSelf: "center",
                bgcolor: "#fff",
                color: "#1E0A3C",
                mt: 2,
              }}
              onClick={logGoogle}
            >
              Signup With Google
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            backgroundImage: `url(${saryP})`,
            backgroundSize: "cover",
            position: "absolute",
            left: "62%",
            top: "370px",
          }}
        ></Box>
      </Stack>
    </>
  );
}

export default CreateAcount;
