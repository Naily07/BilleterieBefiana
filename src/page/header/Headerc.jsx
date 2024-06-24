import { Box, Typography } from "@mui/material"

function Headerc() {
  return (
    <Box>
      <Box fullWidth sx={{ bgcolor: "#fff", display: "flex", alignItems: "center", padding: "10px 40px", boxShadow: "1px 1px 1px rgba(0,0,0,0.35)" }}>
          <Typography sx={{ color: "#fff", fontWeight: "bold", bgcolor: "grey", padding: "10px 20px", fontSize: "12px", borderRadius: "5px" }}>Logo</Typography>
        </Box>
    </Box>
  )
}

export default Headerc