/* eslint-disable no-dupe-keys */
import { Box, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { IoTicketOutline } from "react-icons/io5";

function HeaderbUser() {


  return (
    <>
      <Box fullWidth sx={{ height: "68px", bgcolor: "#291F43", padding: "0px 45px", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>      
        <Link to="/tiket">
          <Button sx={{ border: "1px solid #fff" }}> 
            <IoTicketOutline size={20} color="#fff" />
            <Typography ml={1} sx={{ color: "#fff" }}>Tickets</Typography>
          </Button>
        </Link>
      </Box>
    </>
  )
}

export default HeaderbUser