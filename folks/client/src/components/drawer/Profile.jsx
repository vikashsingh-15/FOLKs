import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";

//components
import { AccountContext } from "../../context/AccountProvider";

//styles
const StyledImageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StyledImage = styled("img")`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StyledNameBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledName = styled("h2")`
  color: white;
  margin: 0;
  margin-bottom: 10px;
`;

const StyledDescriptionBox = styled(Box)`
  color: white;
  margin: 0;
  margin-top: 30px;
`;

const Proile = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <StyledImageBox>
        <StyledImage src={account.picture} alt="profile" />
      </StyledImageBox>
      <StyledNameBox>
        <StyledName>{account.name}</StyledName>
        <Typography>{account.email}</Typography>
      </StyledNameBox>
      <StyledDescriptionBox>
        <Typography>Description:</Typography>
      </StyledDescriptionBox>
      <Box></Box>
    </>
  );
};

export default Proile;
