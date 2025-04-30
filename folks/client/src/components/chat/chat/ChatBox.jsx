import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { useContext } from "react";

import { AccountContext } from "../../../context/AccountProvider";

//Components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { getConversation } from "../../../service/api";

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      // console.log("Conversation data", data);
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);

  // useEffect(() => {
  //   const getConversationDetails = async () => {
  //     let data = await getConversation({
  //       senderId: account.sub,
  //       receiverId: person.sub,
  //     });

  //     if (data && data._id) {
  //       console.log("Conversation details", data);
  //       setConversation(data);
  //     } else {
  //       console.warn("No conversation found or invalid format");
  //     }
  //   };
  //   if (person?.sub) {
  //     getConversationDetails();
  //   }
  // }, [person.sub]);

  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;
