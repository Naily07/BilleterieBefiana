import { Box, Stack, Typography } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";

export default function InfoEvent(){
    return(
        <Box sx={{ width: "50%" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#291F43",
                  "&.MuiTypography-root::after": {
                    content: "''",
                    display: "block",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "gray",
                  },
                }}
              >
                Préstige :
              </Typography>
              <Typography
                sx={{ textTransform: "uppercase", ml: 1, fontWeight: "600" }}
              >
                Soirée
              </Typography>
            </Box>
            <Stack sx={{ mt: 2 }} gap={2}>
              <Box gap={1} sx={{ display: "flex", alignItems: "center" }}>
                <FaLocationDot />
                <Typography>Ivandry</Typography>
              </Box>
              <Box
                mt={1}
                gap={1}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <BsFillCalendarDateFill />
                <Typography>20 Jiun</Typography>
              </Box>
              <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                <MdAccessTimeFilled size={20} />
                <Typography ml={0.5}>Heurre de début: 20h </Typography>
                <Typography>Jusqu à: 23h </Typography>
              </Box>
            </Stack>
          </Box>
    )
}