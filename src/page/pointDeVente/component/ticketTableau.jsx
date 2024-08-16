import { useEffect, useRef, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import RowTicket from "./TCellTicket";
import HeadTicket from "./headTicketTable";
import {
  ListAddTicketEventOrganisateur,
  ListTicketEvent,
  updateBulkAddTicket,
} from "../../../services/ticket";
import TabCellAddTicket from "./TCellAddticket";
import SelectEvent from "../../../components/pdv/selectEvent";

const events = [
  {
    id: 1,
    nom: "Smatchin",
  },
  {
    id: 2,
    nom: "Concert",
  },
  {
    id: 3,
    nom: "Festival",
  },
  // Ajoutez plus d'événements ici
];
const billets = [
  {
    pk: 14,
    type_ticket: "simple",
    nb_ticket: 50,
    event_id: 1,
    utilisateur_pk: 1,
  },
  {
    pk: 15,
    type_ticket: "VIP",
    nb_ticket: 20,
    event_id: 2,
    utilisateur_pk: 2,
  },
  {
    pk: 16,
    type_ticket: "silver",
    nb_ticket: 30,
    event_id: 3,
    utilisateur_pk: 3,
  },
  {
    pk: 17,
    type_ticket: "gold",
    nb_ticket: 40,
    event_id: 1,
    utilisateur_pk: 1,
  },
  // Ajoutez plus de billets ici
];
const listAddTicket = [
  {
    type_ticket: "simple",
    nb_ticket: 50,
    event: {
      id: 1,
      nom: "Smatchin",
    },
    pk: 14,
  },
  {
    type_ticket: "Gold",
    nb_ticket: 50,
    event: {
      id: 1,
      nom: "Smatchin",
    },
    pk: 14,
  },
  {
    type_ticket: "Vip",
    nb_ticket: 50,
    event: {
      id: 1,
      nom: "Smatchin",
    },
    pk: 14,
  },
];

export default function TicketTableau({ pointDeVent, listEvent }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const [AddticketForm, setAddTicketForm] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [listTicket, setListTicket] = useState([]);
  const [isUpdateBool, setUpdateBool] = useState(false);
  const pdv = pointDeVent.filter((item) => item.checked) || [];

  useEffect(() => {
    const selectEvent =
      listEvent?.filter((item) => item.nom === selectedEvent) || null;
    console.log("Sell", pdv.pk, selectEvent[0]?.pk);

    if (selectEvent.length > 0) {
      const slug = selectEvent[0]?.slug;
      ListTicketEvent(slug)
        .then((res) => setListTicket(res.data))
        .catch((err) => setListTicket([]));
      // billets //Fetch
      //   .map((item) => {
      //     console.log(
      //       item.utilisateur_pk,
      //       pdv[0]?.pk,
      //       item.event_id,
      //       selectEvent[0]?.pk
      //     );
      //     return item.utilisateur_pk === pdv[0]?.pk &&
      //       item.event_id === selectEvent[0]?.pk
      //       ? item
      //       : null;
      //   })
      //   .filter((item) => item !== null)
      // );
    } else {
      setListTicket(() => []);
    }
  }, [isUpdateBool, selectedEvent]);

  useEffect(() => {
    const selectEvent =
      listEvent?.filter((item) => item.nom === selectedEvent) || null;
    console.log("Tsia", pdv.pk, selectEvent[0]?.pk)
    if (pdv.length > 0 && selectEvent.length > 0) {
      const slug = selectEvent[0]?.slug;
      const pk = pdv[0]?.pk;
      ListAddTicketEventOrganisateur({ pk, slug })
        .then((res) => {
          console.log("ADD", res.data);
          setAddTicketForm(() =>
            res.data.map((item) => {
              return {
                pk: item.pk,
                type_ticket: item.type_ticket,
                defaultValue: item.nb_ticket | 0,
                register: item.type_ticket,
              };
            })
          );
        })
        .catch((err) => setAddTicketForm([]));
      // billets //Fetch
      //   .map((item) => {
      //     console.log(
      //       item.utilisateur_pk,
      //       pdv[0]?.pk,
      //       item.event_id,
      //       selectEvent[0]?.pk
      //     );
      //     return item.utilisateur_pk === pdv[0]?.pk &&
      //       item.event_id === selectEvent[0]?.pk
      //       ? item
      //       : null;
      //   })
      //   .filter((item) => item !== null)
      // );
    } else {
      setAddTicketForm(() => []);
    }
  }, [pdv[0], selectedEvent]);

  const onSubmit = async (data) => {
    const ticketToUpdate = Object.keys(data);
    const datas = [];
    const selectEvent =
      listEvent?.filter((item) => item.nom === selectedEvent) || null;
    if (pdv.length > 0 && selectEvent[0]?.slug) {
      const slug = selectEvent[0]?.slug;
      const pdvId = pdv[0]?.pk;
      console.log("DATAS", datas);

      AddticketForm.forEach((item) => {
        ticketToUpdate.forEach((tName) => {
          if (item.register === tName) {
            datas.push({ nb_ticket: parseInt(watch(tName)), pk: item.pk });
            console.log("Equal", item.register, data);
          }
        });
      });
      console.log("DATAS", datas);
      updateBulkAddTicket({ datas, slug, pdvId })
        .then((res) => {
          console.log(res.status);
          setUpdateBool((v) => !v);
          // reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // useEffect(() => {
  //   const selectEvent = listEvent?.filter((item) => item.nom === selectedEvent) || null;
  //   console.log("Sell", pdv[0]?.pk, selectEvent[0]?.pk);
  //   const pk = pdv[0]?.pk
  //   if (pdv.length > 0 && selectEvent.length > 0) {
  //     const slug = selectEvent[0]?.slug;

  //   }
  // }, [pdv[0], selectedEvent]);

  return (
    <Box
      sx={{
        minWidth: "35%",
        bgcolor: "#fff",
        borderRadius: "5px",
        border: "1px solid rgba(0, 0, 0, 0.10) ",
        padding: "0px 0px 20px 0px",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            height: "40px",
            alignItems: "center",
            padding: "25px 25px",
            bgcolor: "#fff",
          }}
        >
          <Typography
            sx={{ color: "#1E0A3C", fontWeight: "700", fontSize: "16px" }}
          >
            Anicka Nome
          </Typography>
        </Box>
        <Stack sx={{ padding: "0px 25px" }}>
          {/* <Typography sx={{ mb: 1.5, fontSize: "14px"}}>
                      Selectionner un évèment
                    </Typography> */}
          <InputLabel id="demo-simple-select-label">
            Selectionner un évèment
          </InputLabel>

          <SelectEvent
            listEvent={listEvent}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
          ></SelectEvent>

          <Typography sx={{ mt: 1.7, fontSize: "17px", mb: 1.5 }}>
            Ticket displonible de lévènement
          </Typography>
          <Box>
            <TableContainer sx={{ border: "1px solid rgba(0,0,0, 0.10)" }}>
              <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                  <HeadTicket listTicket={listTicket} />
                </TableHead>
                <TableBody>
                  <RowTicket listTicket={listTicket} />
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Typography sx={{ mt: 1.7, fontSize: "17px", mb: 1.5 }}>
            Ticket du point de vente
          </Typography>
          <Box>
            <TableContainer
              sx={{ width: "auto", border: "1px solid rgba(0,0,0, 0.10)" }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <HeadTicket listTicket={AddticketForm} />
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TabCellAddTicket
                      listTicket={AddticketForm}
                      register={register}
                    />
                    {/* {AddticketForm.length>0 && AddticketForm?.map((item, i) => (
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
                    ))} */}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
        <Box sx={{ mx: "auto", width: "90px", mt: 2.1 }}>
          <Button
            type="submit"
            sx={{
              color: "#000",
              textTransform: "lowercase",
              border: "1px solid rgba(0, 0, 0, 0.35)",
              padding: "5px 30px",
              borderRadius: "5px",
            }}
          >
            <span style={{ textTransform: "uppercase" }}>V</span>alider
          </Button>
        </Box>
      </form>
    </Box>
  );
}
