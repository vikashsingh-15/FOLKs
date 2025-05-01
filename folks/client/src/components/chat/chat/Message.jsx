import React, { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";

import { formatDate } from "../../../utils/common-utils";
import { AccountContext } from "../../../context/AccountProvider";

const StyledSenderSideBox = styled(Box)`
  display: flex;
  background: #dcf8c6;
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
          <StyledText>{message.text}</StyledText>
          <StyledDate>{formatDate(message.createdAt)}</StyledDate>
        </StyledSenderSideBox>
      ) : (
        <StyledReceiverSideBox>
          <StyledText>{message.text}</StyledText>
          <StyledDate>{formatDate(message.createdAt)}</StyledDate>
        </StyledReceiverSideBox>
      )}
    </>
  );
};

export default Message;
