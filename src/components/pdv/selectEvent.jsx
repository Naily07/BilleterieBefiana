import { MenuItem, Select } from "@mui/material";

export default function SelectEvent({listEvent, setSelectedEvent, selectedEvent, width}) {
    const handelChangeEvent = (e) => {
        if (e.target.value) setSelectedEvent(e.target.value);
      };
  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedEvent}
        label="Age"
        onChange={handelChangeEvent}
        size="medium"
        sx={{
          width : width || "auto",
          height: "50px",
        }}
      >
        {listEvent.length > 0 &&
          listEvent?.map((item, i) => {
            return (
              <MenuItem value={item.nom} key={i}>
                {item.nom}
              </MenuItem>
            );
          })}
      </Select>
    </>
  );
}
