import { Search as SearchIcon } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";

//styled
const StyledSearchBox = styled(Box)`
  display: flex;
  background-color: #034c53;
  padding: 7px;
`;

const StyledSearchInputWrapper = styled(Box)`
  background-color: #0d253a;
  display: flex;
  border-radius: 10px;
  width: 100%;
  align-items: center;
  height: 30px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  padding: 8px;
  color: #ff6a20;
  // height: 25px;
`;
const StyledInputBase = styled(InputBase)`
  padding: 8px;
  height: 25px;
  width: 100%;
  color: #fff;
`;

const Search = ({ setText }) => {
  return (
    <StyledSearchBox>
      <StyledSearchInputWrapper>
        <StyledSearchIcon>
          <SearchIcon fontSize="small" />
        </StyledSearchIcon>
        <StyledInputBase
          placeholder="Search…"
          onChange={(e) => setText(e.target.value)}
        />
      </StyledSearchInputWrapper>
    </StyledSearchBox>
  );
};

export default Search;
