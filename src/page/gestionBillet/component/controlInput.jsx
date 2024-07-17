import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export default function ControlInput(props) {
  const { name, label, type, placeholder, rules, control, defaultValue } =
    props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            label={label}
            type={type}
            size="small"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
}
