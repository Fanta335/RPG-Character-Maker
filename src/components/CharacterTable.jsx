import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/system";

import { charDefaultParams } from "../CharacterDefaultParams";
import DisplayArea from "./DisplayArea";
import InputArea from "./InputArea";

const CharacterTable = () => {
  const [charName, setCharName] = useState("とりやま");
  const [charGender, setCharGender] = useState("male");
  const [charClass, setCharClass] = useState(1);
  const [charTrait, setCharTrait] = useState(1);
  const [charParams, setCharParams] = useState(charDefaultParams[0]);

  const handleChangeName = (event) => {
    setCharName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setCharGender(event.target.value);
  };

  const handleChangeClass = (event) => {
    setCharClass(event.target.value);
    handleChangeParams(charDefaultParams[event.target.value - 1], charTrait);
  };

  const handleChangeTrait = (event) => {
    setCharTrait(event.target.value);
    handleChangeParams(charDefaultParams[charClass - 1], event.target.value);
  };

  const handleChangeParams = (defaultParams, traitIndex) => {
    let { strength, agility, resilience, wisdom, luck } = defaultParams;

    switch (traitIndex) {
      case 1:
        setCharParams({ strength, agility, resilience, wisdom, luck });
        break;
      case 2:
        agility *= 1.4;
        setCharParams({ strength, agility, resilience, wisdom, luck });
        break;
      case 3:
        strength *= 1.1;
        agility *= 1.1;
        luck *= 1.2;
        setCharParams({ strength, agility, resilience, wisdom, luck });
        break;
      case 4:
        luck *= 1.5;
        setCharParams({ strength, agility, resilience, wisdom, luck });
        break;
      case 5:
        strength *= 1.1;
        agility *= 1.1;
        setCharParams({ strength, agility, resilience, wisdom, luck });
        break;
      default:
        setCharParams({ strength, agility, resilience, wisdom, luck });
    }
  };

  return (
    <Box sx={{ backgroundColor: "#326826" }}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item>
          <DisplayArea charName={charName} charGender={charGender} charClass={charClass} charTrait={charTrait} charParams={charParams} />
        </Grid>
        <Grid item>
          <InputArea
            charName={charName}
            handleChangeName={(event) => handleChangeName(event)}
            charGender={charGender}
            handleChangeGender={(event) => handleChangeGender(event)}
            charClass={charClass}
            handleChangeClass={(event) => handleChangeClass(event)}
            charTrait={charTrait}
            handleChangeTrait={(event) => handleChangeTrait(event)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CharacterTable;
