/* eslint-disable no-dupe-keys */
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles"
import { useNavigate } from "react-router-dom";
/*
const sousmenu = {
  color: "#fff",
  cursor: "pointer",
}
*/
export default function Navbar() {
  const navigate = useNavigate()
  const theme = useTheme();
  console.log("NAVV");
  return (
    <>
      {/* <Box
            fullWidth
            sx={{
              display: "flex",              // 
              // height: "68px",
              // mt : "100px",
              bgcolor: "#291F43",
              border : "1px solid white",
              padding: "0px 45px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          > */}
      <Typography
        sx={{
          textTransform: "uppercase",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "500",
        }}
        >
        Organisateur
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        >
        <Box gap={8} sx={{ display: "flex" }}></Box>
        <Box sx={{ width: "350px" }}>
          <Stack
            spacing={1}
            direction="row"
            sx={{ display: "flex", justifyContent: "space-between" }}
            >
            <Button
              to="/organisateur/point-de-vente"
              onClick={()=>navigate("/organisateur/point-de-vente")}
              variant="outlined"
              color="customWhite"
              sx={{ borderRadius: "10px", padding: "10px 20px" }}
              >
              <Typography sx={{ color: "#fff" }} textTransform={"capitalize"}>
                point de vente
              </Typography>
            </Button>

            <Link to="/createevent">
              <Button
                variant="contained"
                sx={{
                  padding: "10px 20px",
                  color: "#0032FA",
                  bgcolor: "#fff",
                  "&:hover": { bgcolor: "#E2DDFE" },
                  borderRadius: "10px",
                }}
              >
                <Typography sx={{ textTransform: "lowercase" }}>
                  <span style={{ textTransform: "uppercase" }}>c</span>réer un
                  évènement
                </Typography>
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
      
      {/* </Box> */}
    </>
  );
}
