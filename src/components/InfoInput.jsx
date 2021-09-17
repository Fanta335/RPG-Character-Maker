import React from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";

const InfoInput = (props) => {
  const { charName, charGender, charClass, charTrait } = props;

  const getCharClass = (charClass) => {
    switch (charClass) {
      case 1:
        return "勇者";
      case 2:
        return "戦士";
      case 3:
        return "魔法使い";
      default:
        return "";
    }
  };

  const getCharTrait = (charTrait) => {
    switch (charTrait) {
      case 1:
        return "普通";
      case 2:
        return "電光石火";
      case 3:
        return "勇敢";
      case 4:
        return "ラッキーマン";
      case 5:
        return "おてんば";
      default:
        return "";
    }
  };

  return (
    <Box sx={{ border: 5, borderColor: "white", borderRadius: 2, p: 1 }}>
      <Typography variant="h7" component="div">
        名前 : {charName}
      </Typography>
      <Typography variant="h7" component="div">
        性別 : {charGender === "male" ? "男" : "女"}
      </Typography>
      <Typography variant="h7" component="div">
        職業 : {getCharClass(charClass)}
      </Typography>
      <Typography variant="h7" component="div">
        性格 : {getCharTrait(charTrait)}
      </Typography>
    </Box>
  );
};

export default InfoInput;
