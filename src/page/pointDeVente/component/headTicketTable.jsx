import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const ticket = [
  {
    type_ticket: "NO ticket",
  },
  {
    type_ticket: "NO ticket",
  },
  {
    type_ticket: "NO ticket",
  },
];

export default function HeadTicket({ listTicket }) {
  if (listTicket.length === 0) {
    return (
      <TableRow sx={{ bgcolor: "#F4F2FF" }}>
        {ticket.map((type, i) => (
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
            {type.type_ticket}
          </TableCell>
        ))}
      </TableRow>
    );
  }
  return (
    <TableRow sx={{ bgcolor: "#F4F2FF" }}>
      {listTicket.map((type, i) => (
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
          {type.type_ticket}
        </TableCell>
      ))}
    </TableRow>
  );
}
