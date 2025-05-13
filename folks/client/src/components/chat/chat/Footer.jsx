import { useState, useEffect } from "react";
import { Box, InputBase, styled } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";

import { uploadFile } from "../../../service/api";

const StyledContainer = styled(Box)`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #0d253a;
  //   justify-content: space-between;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const StyledInputBox = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: calc(100% - 100px);
`;

const StyledInputBase = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  border-radius: 18px;
  //   background-color: #ffffff;
  color: #000000;
  font-size: 14px;
`;

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setImage(response.data.imageUrl);
      }
    };
    getImage();
  }, [file]);

  const onFileChange = (e) => {
    // console.log(e);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  return (
    <StyledContainer>
      <EmojiEmotionsOutlinedIcon />
      <label htmlFor="fileInput">
        <AttachFileIcon />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />
      <StyledInputBox>
        <StyledInputBase
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </StyledInputBox>
      <MicIcon />
    </StyledContainer>
  );
};

export default Footer;
