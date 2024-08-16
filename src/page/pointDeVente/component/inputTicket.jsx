import {TextField } from "@mui/material";

export default function InputTicket({ register, defaultValue, registerName }) {
  return (
    <TextField
      type="number"
      size="small"
      sx={{
        maxWidth: "100px",
        padding: "5px",
      }}
      inputProps={{
        min: 0
      }}
      {...register(registerName, {
        value: defaultValue,
        required: "Ce champ est requis"
      })}
    />
  );
}
