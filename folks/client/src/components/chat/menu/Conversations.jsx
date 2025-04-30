import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import Conversation from "./Conversation";
import { Box, styled, Divider } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

//Styled
const StyledConversationBox = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #034c53;
  height: calc(100vh - 90px);
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  background-color: #e9edef;
  opacity: 0.7;
  //   margin: 0 0 0 70px;
  width: 100%;
`;

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filterData = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filterData);
    };
    fetchData();
  }, [text]);

  return (
    <>
      <StyledConversationBox>
        {users.map(
          (user) =>
            user.sub !== account.sub && (
              <>
                <Conversation user={user} />
                <StyledDivider />
              </>
            )
        )}
      </StyledConversationBox>
    </>
  );
};

export default Conversations;
