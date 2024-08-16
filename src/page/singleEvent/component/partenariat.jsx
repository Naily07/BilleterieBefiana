import { Box, Stack, Typography } from "@mui/material";
import FunctionListelogo from "./listLogo";

export default function Partenaire({ detailEvent }) {
  return (
    <Box sx={{ width: "50%" }}>
      {/* <Box sx={{width:"200px"}}> */}
        <Typography
          sx={{
            fontSize: "20px",
            color: "#291F43",
            "&::after": {
              content: "''",
              display: "block",
              width: "100px",
              height: "2px",
              backgroundColor: "gray",
            },
          }}
        >
          Partenaires
        </Typography>
      {/* </Box> */}
      {/* <Box sx={{ width: "85px", height: "5px", bgcolor: "gray" }}></Box> */}
      <Stack
        gap={2}
        direction="row"
        flexWrap={"wrap"}
        alignItems={"center"}
        marginTop={2}
      >
        <FunctionListelogo partenariat={detailEvent?.sponsors_images} />
      </Stack>
    </Box>
  );
}
