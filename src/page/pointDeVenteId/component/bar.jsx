import { useState } from "react";
import { Box, Stack } from "@mui/material";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "@mui/material/Link";

const sxIcon = {
  fontSize: 35,
  color: "customWhite.main",
};
const itemList = [
  {
    icon: <HomeIcon sx={sxIcon} />,
    lien: "/point-de-vente/1",
  },
  {
    icon: <ExitToAppIcon sx={sxIcon} />,
    lien: "/accueil",
  },
];
export default function Bar() {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      width={"75px"}
      borderRadius={"20px"}
      bgcolor={"#6E6893"}
      // pt={3}
      gap={5}
    >
      <List sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%"}}>
        {itemList.map((item, i) => (
          <ListItem key={i}>
            <ListItemButton
              component={Link}
              to={item.lien}
              sx={{
                color: "customWhite.main",
                fontSize: "20px",
                fontWeight: "600",
                textTransform: "uppercase",
                "&.Mui-active": {
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "600"
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "10px" }}>{item.icon}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
