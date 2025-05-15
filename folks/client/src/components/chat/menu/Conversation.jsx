import { Box, Typography, styled } from "@mui/material";

import { useContext } from "react";

//Components
import { AccountContext } from "../../../context/AccountProvider";
import { setConnversation } from "../../../service/api";
//Styled

const StyledConversationBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledUserImage = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 10px",
});

const Conversation = ({ user }) => {
  const { setPerson, account } = useContext(AccountContext);
  const getUsers = async () => {
    setPerson(user);
    await setConnversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <StyledConversationBox onClick={() => getUsers()}>
      <Box>
        <StyledUserImage
          src={user.picture}
          alt="user"
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
      </Box>
      <Box>
        <Typography variant="h6">{user.name}</Typography>
      </Box>
    </StyledConversationBox>
  );
};

export default Conversation;
