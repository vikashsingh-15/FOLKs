import { Box, styled } from "@mui/material";
//Component: Menu.jsx

import Header from "./Header";
import Search from "./Search";

//Style

const StyledMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #034c53;
  height: calc(100vh - 90px);
`;

const Menu = () => {
  return (
    <StyledMenu>
      <Header />
      <Search />
    </StyledMenu>
  );
};

export default Menu;
