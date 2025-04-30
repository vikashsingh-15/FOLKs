import React from "react";
import { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
// import { emptyChatImage } from "../../../resources/data";
//Components
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage } from "../../../service/api";

const StyledMessageBox = styled(Box)`
  // background-image: url("https://i.ibb.co/s9z3NP6d/download.jpg");
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const StyledMessage = styled(Box)`
  height: calc(100vh - 210px);
  overflow-y: scroll;
`;

const StyledFooterBox = styled(Box)`
  position: auto;
  width: 100%;
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const { account } = useContext(AccountContext);

  const sendText = async (e) => {
    // console.log(e);
    const code = e.keyCode || e.which;
    if (code === 13) {
      if (!conversation || !conversation._id) {
        console.error("Conversation is not defined or _id is missing");
        return;
      }

      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };

      // console.log("Message to be sent:", message);
      await newMessage(message);
      setValue(""); //clear input field
    }
  };

  return (
    <StyledMessageBox>
      <StyledMessage>Message</StyledMessage>
      <Footer sendText={sendText} setValue={setValue} value={value} />
    </StyledMessageBox>
  );
};

export default Messages;
