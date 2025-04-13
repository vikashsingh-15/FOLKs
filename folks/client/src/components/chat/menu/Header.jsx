import React, { useContext, useState } from "react";
// import { useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import { Chat as ChatIcon } from "@mui/icons-material";
// import { MoreVert } from "@mui/icons-material";

//Components
import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

//styles
const StyledHeader = styled(Box)`
  height: 50px;
  background-color: #0d253a;
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  font-size: 12px;
`;

const StyledProfileImage = styled("img")`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const StyledChatMoreVertIcons = styled(Box)`
  margin-left: auto;
  aign-items: center;
`;

// This component is used to display the header of the chat menu
const Header = () => {
  const { account } = useContext(AccountContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  // const [imagePosition, setImagePosition] = useState(null);
  // const imageRef = useRef(null);
  // useEffect(() => {
  //   if (imageRef.current) {
  //     const rect = imageRef.current.getBoundingClientRect();
  //     setImagePosition(rect); // ✅ Store position
  //     console.log("Ref position:", rect);
  //   }
  // }, []);

  const handleImageClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenDrawer(true);
  };

  return (
    <>
      <StyledHeader>
        <StyledProfileImage
          src={account.picture}
          alt="profile"
          onClick={handleImageClick}
        />
        <h2>{account.name}</h2>
        <StyledChatMoreVertIcons>
          <ChatIcon
            style={{
              marginLeft: "auto",
              cursor: "pointer",
              color: "#919191",
            }}
          />
          <HeaderMenu />
        </StyledChatMoreVertIcons>
      </StyledHeader>

      <InfoDrawer
        openDrawer={openDrawer}
        anchorEl={anchorEl}
        setOpenDrawer={setOpenDrawer}
      />

      {/* <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} /> */}
      {/* <InfoDrawer drawer={{ open: openDrawer, setOpen: setOpenDrawer }} /> */}
    </>
  );
};

export default Header;
