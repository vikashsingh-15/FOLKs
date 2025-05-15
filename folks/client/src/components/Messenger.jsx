import { useContext } from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";

// components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
import logo from "../resources/logo.png";
import { AccountContext } from "../context/AccountProvider";

// styles
const StyledBox = styled(Box)`
  height: 100vh;
  // background-color: #ff6a20;
`;

const StyledLoginHeader = styled(AppBar)`
  background-color: #0d253a;
  color: white;
`;

const StyledChatHeader = styled(AppBar)`
  background-color: #0d253a;
  color: white;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return account ? (
    <Box>
      <StyledChatHeader position="fixed">
        <Toolbar>
          <img src={logo} alt="FOLKs" height="40" />
        </Toolbar>
      </StyledChatHeader>
      <ChatDialog />
    </Box>
  ) : (
    <StyledBox>
      <StyledLoginHeader position="static">
        <Toolbar>
          <img src={logo} alt="FOLKs" height="40" />
        </Toolbar>
      </StyledLoginHeader>
      <LoginDialog />
    </StyledBox>
  );
};

export default Messenger;
