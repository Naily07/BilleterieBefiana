import { Box, Typography, Stack } from "@mui/material"
import logofacebook from "../../assets/facebook.png"

function Footer() {
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "#14121F", padding: "6% 6%" }}>
        <Box sx={{ display: "flex", gap: "4px", borderBottom: "1px solid #fff" }}>
          <Box sx={{ /*bgcolor: "yellow"*/ width: "300px", height: "200px" }}>
            <Stack>
              <Typography sx={{ color: "#fff", mb: 1.2 }}>Ouvrire un compte</Typography>
              <Typography sx={{ color: "#fff" }}>participant</Typography>
              <Typography sx={{ color: "#fff" }}>organisateur</Typography>
              <Typography sx={{ color: "#fff" }}>revendeur</Typography>
            </Stack>
          </Box>
          <Box sx={{ /*bgcolor: "yellow",*/ width: "300px", height: "200px", padding: "0px 0px 0px 50px" }}>
            <Typography sx={{ color: "#fff" }}>Blog</Typography>
          </Box>
          <Box sx={{ /*bgcolor: "yellow",*/ width: "300px", height: "200px" }}>
            <Typography sx={{ color: "#fff" }}>Type évènement</Typography>
          </Box>
          <Box sx={{ /*bgcolor: "yellow",*/ width: "300px", height: "200px" }}>
            <Typography sx={{ color: "#fff" }}>Photo</Typography>
          </Box>
          <Box sx={{ /*bgcolor: "yellow",*/ width: "300px", height: "200px" }}>
            <Typography sx={{ color: "#fff", mb: 1.2 }}>Suivez-nous</Typography>
            <Box sx={{  }}><img src={logofacebook} alt="" style={{ width: "30px", height: "30px", borderRadius: "50px", cursor: "pointer" }}/></Box>
          </Box>
          <Box sx={{ /*bgcolor: "yellow",*/ width: "300px", height: "200px" }}>
            <Typography sx={{ color: "#fff", mb: 1.2 }}>Contact</Typography>
            <Box>
              <Typography sx={{ color: "#fff" }}>Befiana@gmail.com</Typography>
              <Typography sx={{ color: "#fff" }}>+261326588745</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography sx={{ color: "#fff", textAlign: "center" }}>Photo, inc. 2024. We love our users!</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Footer