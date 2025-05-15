import { Box, styled } from "@mui/material";
import { useState } from "react";
//Component: Menu.jsx

import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

//Style

const StyledMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #034c53;
  height: calc(100vh - 90px);
`;

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <StyledMenu>
      <Header />
      <Search setText={setText} />
      <Conversations text={text} />
    </StyledMenu>
  );
};

export default Menu;
