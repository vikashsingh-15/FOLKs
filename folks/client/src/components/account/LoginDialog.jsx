import { useContext } from "react";
import React, { useState } from "react";
import { Dialog, Button, Typography, Box, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const DialogStyled = {
  height: "96%",
  marginTop: "20%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  marginBottom: "20%",
  borderRadius: "0px",
  // backgroundColor: "#0d253a",
  overflow: "hidden",
  hideBackDrop: true,
};

const StyledButton = styled(Button)`
  background-color: #0d253a;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  /* Center the button on the screen */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledTypography = styled(Typography)`
  color: #0d253a;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function LoginDialog() {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
    handleClose();
  };
  const onLoginError = (error) => {
    // console.error("Login failed:", error);
    // Handle login error here
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledButton onClick={handleClickOpen}>Sign In</StyledButton>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: DialogStyled }}
      >
        <Box p={3}>
          <StyledTypography variant="h6">
            Welcome to FOLKs! Please sign in to continue.
          </StyledTypography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default LoginDialog;
