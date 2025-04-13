import React from "react";
import { Box, styled } from "@mui/material";

//Components
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";

//styles
const StyledCustomChatDiv = styled("div")`
  margin-top: 50px;
  padding: 20px;
  background-color: #ff6a20;
  height: calc(100vh - 50px);
  max-weight: 100%;
`;

const StyledCustomChatDialogHomeScreen = styled(Box)`
  display: flex;
`;

const StyledLeftSide = styled(Box)`
  //   flex: 0.3;
  width: 400px;
  background-color: #f9f9f9;
  margin-right: 5px;
  height: 100%;
  min-width: 400px;
`;

const StyledRightSide = styled(Box)`
  //   flex: 0.7;
  width: 73%;
  min-width: 400px;
  border-right: 1px solid #dcdcdc;
  background-color: #f9f9f9;
  height: 100%;
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
