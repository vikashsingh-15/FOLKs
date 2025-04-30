import React from "react";
import { useContext } from "react";
import { Box, styled } from "@mui/material";

//Components
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "../../context/AccountProvider";

//styles

const StyledCustomChatDiv = styled("div")`
  margin-top: 55px;
  padding: 20px;
  background-color: #ff5100;
  max-width: 100%;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  // height: calc(100vh - 50px);
  height: 100%;
`;

const StyledCustomChatDialogHomeScreen = styled(Box)`
  display: flex;
`;

const StyledLeftSide = styled(Box)`
  //   flex: 0.3;
  width: 350px;
  margin-right: 5px;
  // height: calc(100vh - 90px);
  min-width: 350px;
`;

const StyledRightSide = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #034c53;
  height: calc(100vh - 90px);
  width: 100%;
`;

const ChatDialog = () => {
  const { person } = useContext(AccountContext);
  return (
    <>
      <StyledCustomChatDiv>
        <StyledCustomChatDialogHomeScreen>
          <StyledLeftSide>
            <Menu />
          </StyledLeftSide>
          <StyledRightSide>
            {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
          </StyledRightSide>
        </StyledCustomChatDialogHomeScreen>
      </StyledCustomChatDiv>
    </>
  );
};
export default ChatDialog;
