import { Box, Stack, Typography, Button /*Checkbox*/ } from "@mui/material";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import useAuth from "../../../services/hooks/useAuth";
export default function UserTopBar() {
  const { logout } = useAuth();
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
      <ExitToAppIcon
        fontSize={"large"}
        sx={{ cursor: "pointer" }}
        onClick={() => logout()}
      />
    </Stack>
  );
}
