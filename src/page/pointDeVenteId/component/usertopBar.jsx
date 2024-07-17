import { Box, Stack, Typography, Button /*Checkbox*/ } from "@mui/material";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
export default function UserTopBar() {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Typography
        sx={{
          color: "primary.main",
          fontWeight: "600",
          fontSize: "18px",
          width: "auto",
          alignSelf: "left",
          "::after": {
            content: "''",
            display: "block",
            bgcolor: "primary.main",
            height: "2px",
            // ml : "30px",
            width: "15%",
          },
        }}
      >
        Anicka Madson
      </Typography>
      <ExitToAppIcon  fontSize= {"large"} sx={{cursor : "pointer"}} onClick={()=>alert("click")} />
    </Stack>
  );
}
