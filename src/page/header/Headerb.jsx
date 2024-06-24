/* eslint-disable no-dupe-keys */
import { Box, Typography } from "@mui/material"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

/*
const sousmenu = {
  color: "#fff",
  cursor: "pointer",
}
*/

function Headerb() {
  return (
    <>
      <Box fullWidth sx={{ height: "68px", bgcolor: "#291F43", padding: "0px 45px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography sx={{ textTransform: "uppercase", color: "#fff", fontSize: "18px", fontWeight: "500" }}>Organisateur</Typography>
        <Box sx={{ display: "flex", width: "950px", justifyContent: "space-between", alignItems: "center"}}>
          <Box gap={8} sx={{ display: "flex" }}>
            
          </Box>
          <Box sx={{ width: "350px" }}>
            <Stack spacing={1} direction="row" sx={{ display: "flex", justifyContent: "space-between" }}>
              
                <Button href="/organisateur/point-de-vente" variant="outlined" sx={{ borderRadius: "10px", padding: "10px 20px" }}><Typography sx={{ textTransform: "lowercase", color: "#fff" }}><span style={{ textTransform: "uppercase" }}>p</span>oint de vente</Typography></Button>
           
              <Link to="/createevent">
                <Button variant="contained" sx={{ padding: "10px 20px", color: "#0032FA", bgcolor: "#fff", '&:hover': { bgcolor: "#E2DDFE" }, borderRadius: "10px" }} ><Typography sx={{ textTransform: "lowercase" }}><span style={{ textTransform: "uppercase" }}>c</span>réer un évènement</Typography></Button>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Headerb