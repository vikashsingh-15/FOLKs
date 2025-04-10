import React from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";

//components
import LoginDialog from "./account/LoginDialog";
import logo from "../resources/logo.png";

//styles
const StyledBox = styled(Box)`
  height: 100vh;
  // background-color: #ff6a20;
`;

const StyledAppBar = styled(AppBar)`
  background-color: #0d253a;
  color: white;
`;

const Messenger = () => {
  return (
    <StyledBox>
      <StyledAppBar position="static">
        <Toolbar>
          <img src={logo} alt="FOLKs" height="40" />
        </Toolbar>
      </StyledAppBar>
      <LoginDialog />
    </StyledBox>
  );
};
export default Messenger;
