import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import assignee from "../../utils/Assigne";
const useStyle = makeStyles((theme) => ({
  assign: {
    paddingLeft: ".1rem",
    paddingBottom: "1rem",
    margin: "1rem",
  },
}));
export default function CountrySelect() {
  const classes = useStyle();
  return (
    <Autocomplete
      className={classes.assign}
      id="country-select-demo"
      sx={{ width: 270 }}
      options={assignee}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {console.log("Option", option)}
          <img
            loading="lazy"
            width="20"
            src={option.img}
            // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Assignee"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
