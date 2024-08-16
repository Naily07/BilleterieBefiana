/* eslint-disable no-dupe-keys */
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";

function HeaderbUser() {
  return (
    <>
      <Stack
        sx={{
          height: "68px",
          // bgcolor: "#fff",
          width : '100%',
          padding: "0px 45px",
          right:0,
          flexDirection:"row",
          alignItems: "center",
          justifyContent: "flex-end", 
        }}
      >
        <Link to="/tiket">
          <Button sx={{ border: "1px solid #fff" }}>
            <IoTicketOutline size={20} color="#fff" />
            <Typography ml={1} sx={{ color: "#fff" }}>
              Tickets
            </Typography>
          </Button>
        </Link>
      </Stack>
    </>
  );
}

export default HeaderbUser;
