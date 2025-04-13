import React from "react";
import { Box, styled, Typography } from "@mui/material";

//components

import EmptyChatImage from "../../../resources/emptyChat.png";

//styles
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const StyledImageBox = styled(Box)``;

const StyledImage = styled("img")`
  width: 500px;
  height: 500px;
  border-radius: 50%;
`;

const StyledDescriptionBox = styled(Typography)`
  color: white;
  margin: 0;
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
