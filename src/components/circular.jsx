import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
    </Box>
  );
}
