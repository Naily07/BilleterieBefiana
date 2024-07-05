import { Box, Button, Stack, Typography, TextField } from "@mui/material";

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
        min: 1,
        max: 10,
      }}
      {...register(registerName, {
        value: defaultValue,
        required: "Ce champ est requis",
        // min: { value: 1, message: "La valeur minimale est 1" },
        max: 10,
      })}
    />
  );
}
