import { Box, Typography } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
function Headerc() {
  return (
    <AppBar sx={{ backgroundColor: "#fff" }}>
      <Toolbar>
        <Box height={"8svh"} zIndex={9} bgcolor={"white"} position={"relative"}>
          <Box
            fullWidth
            sx={{
              bgcolor: "#fff",
              display: "flex",
              alignItems: "center",
              padding: "10px 40px"
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "bold",
                bgcolor: "grey",
                padding: "10px 20px",
                fontSize: "12px",
                borderRadius: "5px",
              }}
            >
              Logo
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Headerc;
