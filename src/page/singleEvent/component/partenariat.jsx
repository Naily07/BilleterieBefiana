import { Box, Stack, Typography } from "@mui/material";
import FunctionListelogo from "./listLogo";

export default function Partenaire() {
  return (
    <Box sx={{ width: "50%" }}>
      <Typography sx={{ fontSize: "20px", color: "#291F43" }}>
        Partenaires
      </Typography>
      <Box sx={{ width: "85px", height: "5px", bgcolor: "gray" }}></Box>
      <Stack
        gap={2}
        direction="row"
        flexWrap={"wrap"}
        alignItems={"center"}
        marginTop={2}
      >
        <FunctionListelogo />
      </Stack>
    </Box>
  );
}
