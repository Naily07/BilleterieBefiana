import { Box, Stack, Typography } from "@mui/material";
import saryQr from "../../../assets/logo/imgQr.png";

export default function Visuel() {
  return (
    <>
      <Typography
        sx={{
          ":after": {
            content: "''",
            display: "block",
            bgcolor: "grey",
            width: "45px",
            height: "3px",
            mt: 0.5,
            ml: 0.5,
          },
          fontSize: "20px",
        }}
      >
        Visuel
      </Typography>
      <Stack direction="rows">
        <Box sx={{ mt: 2.5, width: "50%" }}>
          <Typography>
            Nom de l'évenement :{" "}
            <span style={{ fontWeight: "600" }}>Festivale</span>
          </Typography>
          <Typography sx={{ mt: 1, display: "block" }}>
            Date de l'évenement :{" "}
            <span style={{ fontWeight: "600" }}>01/02/2024</span>
          </Typography>
          <Typography sx={{ mt: 1, display: "block" }}>
            Déscription de l'évenement :{" "}
            <span style={{ fontFamily: "initial", display: "block" }}>
              Pour cela, nous et nos partenaires pouvons stocker et utiliser des
              informations non sensibles sur votre appareil, comme des cookies
            </span>
          </Typography>
        </Box>
        <Box sx={{ width: "50%", height: "200px" }}>
          <Box
            sx={{
              backgroundImage: `url(${saryQr})`,
              width: "200px",
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Box>
        </Box>
      </Stack>
    </>
  );
}
