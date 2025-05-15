import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
// import { emptyChatImage } from "../../../resources/data";
//Components
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage, getMessages } from "../../../service/api";
import Message from "./Message";
import { use } from "react";

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

  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const [incomingMessage, setIncomingMessage] = useState(null);
  const scrollRef = useRef();

  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  });

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getMessagesDetails = async () => {
      let data = await getMessages(conversation._id);
      // console.log("Messages data", data);
      setMessages(data);
    };
    conversation._id && getMessagesDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      if (!conversation || !conversation._id) {
        console.error("Conversation is not defined or _id is missing");
        return;
      }

      let message = {};

      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        if (!image) {
          alert("Image is still uploading. Please wait.");
          return;
        }

        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sendMessage", message);

      await newMessage(message);
      setValue("");
      setFile(null);
      setImage("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <StyledMessageBox>
      <StyledMessage>
        {messages &&
          messages.map((message) => (
            <StyledMessageContainerBox ref={scrollRef}>
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
        setImage={setImage}
      />
    </StyledMessageBox>
  );
};

export default Messages;
