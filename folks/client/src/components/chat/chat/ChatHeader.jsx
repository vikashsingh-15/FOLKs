import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

//Styled Components
const StyledChatHeader = styled(Box)`
  height: 50px;
  background-color: #0d253a;
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  font-size: 12px;
`;

const StyledUserImage = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 10px",
  objectFit: "cover",
  borderRadius: "50%",
});

const StyledUserName = styled(Typography)`
  margin-left: 10px;
  font-size: 18px;
`;

const StyledUserStatus = styled(Typography)`
  margin-left: 10px;
  font-size: 12px;
  color: #b0b0b0;
`;

const StyledIconsRight = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
    color: white;
  }
`;

const ChatHeader = ({ person }) => {
  return (
    <StyledChatHeader>
      <StyledUserImage
        // src="https://i.ibb.co/VYrX1BDN/Default-Profile-Image.jpg"
        src={
          person.picture ||
          "https://i.ibb.co/VYrX1BDN/Default-Profile-Image.jpg"
        }
        alt="Default-Profile-Image"
      />
      <Box>
        <StyledUserName>{person.name} </StyledUserName>
        <StyledUserStatus>Last seen at 10:00 PM</StyledUserStatus>
      </Box>

      <StyledIconsRight>
        <Search />
        <MoreVert />
      </StyledIconsRight>
    </StyledChatHeader>
  );
};

export default ChatHeader;
