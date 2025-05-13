import React, { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import { formatDate, downloadMedia } from "../../../utils/common-utils";
import { AccountContext } from "../../../context/AccountProvider";

const StyledSenderSideBox = styled(Box)`
  display: flex;
  //   background: #dcf8c6;
  background: #1f5587;
  color: #ffffff;
  border-radius: 10px;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  margin-left: auto;
  word-break: break-word;
`;
const StyledReceiverSideBox = styled(Box)`
  display: flex;
  background: #ffffff;
  border-radius: 10px;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  //   margin-left: auto;
  word-break: break-word;
`;

const StyledText = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
  word-break: break-word;
`;

const StyledDate = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 5px;
  word-break: keep-all;
  margin-top: auto;
`;

export const Message = ({ message }) => {
  const { account } = useContext(AccountContext);
  return (
    <>
      {message.senderId === account.sub ? (
        <StyledSenderSideBox>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
          {/* <StyledText>{message.text}</StyledText> */}
          {/* <StyledDate>{formatDate(message.createdAt)}</StyledDate> */}
        </StyledSenderSideBox>
      ) : (
        <StyledReceiverSideBox>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
          {/* <StyledText>{message.text}</StyledText>
          <StyledDate>{formatDate(message.createdAt)}</StyledDate> */}
        </StyledReceiverSideBox>
      )}
    </>
  );
};

const ImageMessage = ({ message }) => {
  return (
    <Box style={{ position: "relative" }}>
      {message?.text?.includes(`.pdf`) ? (
        <Box style={{ display: "flex", gap: "10px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="pdf"
            style={{ width: 100, height: 100 }}
          />
          <StyledText>{message.text.split("/").pop()}</StyledText>
        </Box>
      ) : (
        <Box style={{ display: "flex", gap: "10px" }}>
          <img
            src={message.text}
            alt="message.text"
            style={{ width: 100, height: 100 }}
          />
          <StyledText>{message.text.split("/").pop()}</StyledText>
        </Box>
      )}
      <StyledDate style={{ position: "absolute", bottom: 0, right: 0 }}>
        <GetAppIcon
          onClick={(e) => {
            downloadMedia(e, message.text);
          }}
          style={{
            marginRight: 10,
            border: `1px solid grey`,
            borderRadius: "50%",
          }}
          fontSize="small"
        />
        {formatDate(message.createdAt)}
      </StyledDate>
    </Box>
  );
};

const TextMessage = ({ message }) => {
  return (
    <>
      <StyledText>{message.text}</StyledText>
      <StyledDate>{formatDate(message.createdAt)}</StyledDate>
    </>
  );
};

export default Message;
