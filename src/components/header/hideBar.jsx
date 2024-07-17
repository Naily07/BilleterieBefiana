import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Navbar from "./navBar";
import zIndex from "@mui/material/styles/zIndex";

export function HideOnScroll(props) {
  const { children, window } = props;
  console.log("Hiding", window);
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  console.log(trigger);
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <>
      <HideOnScroll {...props}>
        {/* <Box> */}
          <AppBar sx = {{marginTop : "75px", zIndex : 8}}>
            <Toolbar >{props.children}</Toolbar>
          </AppBar>
        {/* </Box> */}
      </HideOnScroll>
      {/* <Toolbar />  */}
    </>
  );
}
