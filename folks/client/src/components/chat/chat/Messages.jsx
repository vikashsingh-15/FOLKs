import React from "react";
import { useContext, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
// import { emptyChatImage } from "../../../resources/data";
//Components
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage, getMessages } from "../../../service/api";
import Message from "./Message";

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

const StyledMessageContainerBox = styled(Box)`
  padding: 2px 20px;
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const { account } = useContext(AccountContext);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [file, setFile] = useState();
  useEffect(() => {
    const getMessagesDetails = async () => {
      let data = await getMessages(conversation._id);
      // console.log("Messages data", data);
      setMessages(data);
    };
    conversation._id && getMessagesDetails();
  }, [person._id, conversation._id, newMessageFlag]);

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
      setNewMessageFlag((prev) => !prev); // trigger re-render to show new message
    }
  };

  return (
    <StyledMessageBox>
      <StyledMessage>
        {messages &&
          messages.map((message) => (
            <StyledMessageContainerBox>
              <Message message={message} />
            </StyledMessageContainerBox>
          ))}
      </StyledMessage>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
      />
    </StyledMessageBox>
  );
};

export default Messages;
