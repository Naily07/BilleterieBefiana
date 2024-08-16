import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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
export default function RowTicket({ listTicket }) {
  if (listTicket.length === 0) {
    return (
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": {
            border: 0,
          },
        }}
      >
        {ticket?.map((item, i) => {
          return (
            <TableCell align="center" color="#fbfbfb">
              {item.nb_ticket}
            </TableCell>
          );
        })}
      </TableRow>
    );
    return;
  }
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
    >
      {ticket.length> 0 && listTicket?.map((item, i) => {
        return <TableCell align="center">{item.nb_ticket}</TableCell>;
      })}
    </TableRow>
  );
}
