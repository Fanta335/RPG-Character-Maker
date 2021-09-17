import React from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";

const CharacterStatus = (props) => {
  const { charParams } = props;
  const { strength, agility, resilience, wisdom, luck } = charParams;

  return (
    <Box sx={{ border: 5, borderColor: "white", borderRadius: 2, p: 1 }}>
      <Typography variant="h7" component="div">
        力 : {Math.floor(strength)}
      </Typography>
      <Typography variant="h7" component="div">
        素早さ : {Math.floor(agility)}
      </Typography>
      <Typography variant="h7" component="div">
        体力 : {Math.floor(resilience)}
      </Typography>
      <Typography variant="h7" component="div">
        賢さ : {Math.floor(wisdom)}
      </Typography>
      <Typography variant="h7" component="div">
        運の良さ : {Math.floor(luck)}
      </Typography>
    </Box>
  );
};

export default CharacterStatus;
