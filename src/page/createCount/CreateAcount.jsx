import { Box, Typography } from "@mui/material"
import Headerc from "../header/Headerc"
import { FcGoogle } from "react-icons/fc";
import saryP from "../../assets/saryf.svg"
//import saryfb from "../../assets/"

function CreateAcount() {
  return (
    <>
      <Box sx={{ backgroundImage: "" }}>
        <Headerc />
        <Box mt={0.4} zIndex={999} sx={{ position: "relative"}} >
          <Box sx={{ mx: "auto", width: "400px", mt: "8%", border: "1px solid rgba(0, 0, 0, 0.10)", borderRadius: "5px", padding: "20px 20px", boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.20)" }}>
            <Typography sx={{ textAlign: "center", fontSize: "23px" }}><span style={{ color: "blue" }}>Commençons</span> à crée votre compte!</Typography>
            <Box sx={{ width: "70px", height: "5px", bgcolor: "grey", mx: "auto", mt:0.8, mb: 4 }}></Box>
            <Box sx={{ width: "90%",height: "50px", mx: "auto", mt:0.8, mb: 2, border: "1px solid rgba(0, 0, 0, 0.20)", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0px 40px", cursor: "pointer", '&:hover': {backgroundColor: "#F4F2FF"}, borderRadius: "5px",  }}>
            <FcGoogle size={25} /><Typography>Signup In With Google</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "200px", height: "200px", backgroundImage: `url(${saryP})`, backgroundSize: "cover", position: "absolute", left: "62%", top: "370px"}}></Box>
      </Box>
    </>
  )
}

export default CreateAcount