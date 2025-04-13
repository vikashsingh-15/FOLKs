import React from "react";
import { Box, styled } from "@mui/material";

//Components
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";

//styles
const StyledCustomChatDiv = styled("div")`
  margin-top: 50px;
  padding: 20px;
  background-color: #ff6a20; //whole screen colour is controled by this
  height: calc(100vh - 90px);
  max-weight: 100%;
  overflow: hidden;
`;

const StyledCustomChatDialogHomeScreen = styled(Box)`
  display: flex;
`;

const StyledLeftSide = styled(Box)`
  //   flex: 0.3;
  width: 400px;
  margin-right: 5px;
  height: calc(100vh - 90px);
  min-width: 400px;
`;

const StyledRightSide = styled(Box)`
  //   flex: 0.7;
  width: 73%;
  min-width: 400px;
  border-left: 1px solid #dcdcdc;
  background-color: #034c53;
  height: calc(100vh - 90px);
`;

const ChatDialog = () => {
  return (
    <>
      <StyledCustomChatDiv>
        <StyledCustomChatDialogHomeScreen>
          <StyledLeftSide>
            <Menu />
          </StyledLeftSide>
          <StyledRightSide>
            <EmptyChat />
          </StyledRightSide>
        </StyledCustomChatDialogHomeScreen>
      </StyledCustomChatDiv>
    </>
  );
};
export default ChatDialog;
