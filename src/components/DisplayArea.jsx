import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import Avatar from "./Avatar";
import CharacterParams from "./CharacterParams";
import InfoInput from "./InfoInput";

const DisplayArea = (props) => {
  const { charName, charGender, charClass, charTrait, charParams } = props;
  return (
    <Paper sx={{ flexGrow: 1, backgroundColor: "#313031", p: 2, margin: "auto", color: "white" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        表示エリア
      </Typography>

      <Grid container spacing={2}>
        <Grid item sm xs={12} md={3}>
          <Avatar charGender={charGender} charClass={charClass} />
        </Grid>
        <Grid item xs={12} md={9} direction="column" container spacing={2}>
          <Grid item>
            <InfoInput charName={charName} charGender={charGender} charClass={charClass} charTrait={charTrait} />
          </Grid>
          <Grid item>
            <CharacterParams charParams={charParams} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DisplayArea;
