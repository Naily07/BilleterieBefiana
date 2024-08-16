import { TableCell } from "@mui/material";
import InputTicket from "./inputTicket";
import { useCallback } from "react";
const ticket = [
  {
    type_ticket: "simple",
    nb_ticket: 0,
  },
  {
    type_ticket: "Gold",
    nb_ticket: 0,
  },
  {
    type_ticket: "Vip",
    nb_ticket: 0,
  },
];
const TabCellAddTicket = ({ register, listTicket })=>{
  const renderList = useCallback(()=>{
    if (listTicket.length === 0) {
      return (
        <>
          {ticket?.map((item, i) => {
            return (
              <TableCell align="center" color="#fbfbfb">
                {item.nb_ticket}
              </TableCell>
            );
          })}
        </>
      )
    }
    return (
      <>
        {listTicket.length > 0 &&
          listTicket?.map((item, i) => (
            <TableCell
              key={i}
              align="center"
              sx={{
                color: "#6E6893",
                fontWeight: "500",
                textTransform: "uppercase",
                "&.MuiTableCell-root": {
                  padding: "10px",
                },
              }}
            >
              <InputTicket
                register={register}
                registerName={item.register}
                defaultValue={item.defaultValue}
              />
            </TableCell>
          ))}
      </>
    );
  }, [register, listTicket])

  return renderList()
}

export default TabCellAddTicket