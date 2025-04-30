import React from "react";
import { Box, styled, Typography } from "@mui/material";

//components

import EmptyChatImage from "../../../resources/emptyChat.png";

//styles
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0d253a;
  align-items: center;
  padding: 20px;
  height: 100%;
`;
const StyledImageBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled("img")`
  width: 50%;
  height: 50%;
  border-radius: 50%;
`;

const StyledDescriptionBox = styled(Typography)`
  color: white;
  margin: 15px;
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
`;
function EmptyChat() {
  return (
    <StyledBox>
      <StyledImageBox>
        <StyledImage src={EmptyChatImage} alt="empty chat" />
      </StyledImageBox>
      <StyledDescriptionBox>Happy Folking!!</StyledDescriptionBox>
    </StyledBox>
  );
}

export default EmptyChat;
