import { Controller } from "react-hook-form";
import { TableCell, TextField } from "@mui/material";

export default function ControlInput(props) {
  const {
    name,
    label,
    type,
    setValue,
    control,
    defaultValue,
    disabled
  } = props;
  
  // console.log("WATCH", name);
  return (
    <TableCell component="th" scope="row">
      <Controller
        name={name}
        control={control}
        rules={{ min : 0}}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <TextField
            id={name}
            onChange={onChange}
            onBlur={onBlur}
            // label={label}
            disabled = {disabled}
            inputProps={{
              min : 0
            }}
            type={type}
            value={value}
            size="small"
            // placeholder={placeholder}
            inputRef={ref}
          />
        )}
      />
    </TableCell>
  );
}
