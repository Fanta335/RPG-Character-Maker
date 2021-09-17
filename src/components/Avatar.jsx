import React from "react";
import { ButtonBase } from "@material-ui/core";
import { styled } from "@material-ui/system";

const Avatar = (props) => {
  const { charGender, charClass } = props;

  const getCharClass = () => {
    switch (charClass) {
      case 1:
        return "hero";
      case 2:
        return "warrior";
      case 3:
        return "mage";
      default:
        return "";
    }
  };

  const resultClass = getCharClass();
  const image = `/static/images/${charGender}-${resultClass}.png`;

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <ButtonBase sx={{ height: "auto", border: 5, borderColor: "white", borderRadius: 2 }}>
      <Img src={image} alt="avatar-image" />
    </ButtonBase>
  );
};

export default Avatar;
