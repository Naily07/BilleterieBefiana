import { useCallback, useEffect, useRef, useState } from "react";
import HeaderAccueil from "../../components/header/HeaderAccueil";
import Headerb from "../../components/header/HeaderAccueil";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
//import { FaTrash } from "react-icons/fa6";
//import { IoAddCircleOutline } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import ModalAjoutArchive from "../../components/modal/ModaleAjoutArchive";
import { FormControl } from "@mui/material";
import { useForm, Controller, set } from "react-hook-form";
import ControlInput from "./component/controlInput";
import {
  CreateBulkTicket,
  ListTicketEvent,
  UpdateTicket,
} from "../../services/ticket";
import { useParams } from "react-router-dom";
import Visuel from "./component/visuel";
import { idID } from "@mui/material/locale";
import Headerc from "../../components/header/Headerc";

const tableBillet = [
  {
    type: "Simple",
    nb_ticket: 15,
    prix: 1500,
    total: "",
  },
  {
    type: "Silver",
    nb_ticket: 13,
    prix: 2000,
    total: "",
  },
  {
    type: "Gold",
    nb_ticket: 20,
    prix: 3000,
    total: "",
  },
];

const styleThead = {
  fontWeight: "normal",
  color: "#fff",
  fontSize: "15px",
  padding: "9px",
  bgcolor: "#291F43",
};

function GestionBillet() {
  const [billetData, setBilletData] = useState([]);
  const billetDataCurrent = useRef(billetData);
  const [isSubmit, setIsSubmit] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const editRef = useRef(editItem);
  const {
    control,
    setValue,
    register,
    getValues,
    watch,
    handleSubmit,
    reset,
    resetField,
  } = useForm();
  const { slug } = useParams();
  
  const [newTicket, setNewTicket] = useState([]);
  const newTicketRef = useRef(null)

  useEffect(() => {
    ListTicketEvent(slug).then((res) => {
      setBilletData(() => res.data.map((b) => ({ ...b, disabled: true })));
    });
  }, [isSubmit]);

  useEffect(() => {
    billetDataCurrent.current = billetData;
  }, [billetData]);

  useEffect(() => {
    editRef.current = editItem;
  }, [editItem]);
  useEffect(()=>{
    newTicketRef.current = newTicket
  }, [newTicket])
  //Effect quand Edit Item Change
  useEffect(() => {
    if (editItem) {
      setNewTicket((prev) => prev.map((item) => ({ ...item, disabled: true })));
      setBilletData((prevData) =>
        prevData.map((item) =>
          item.type_ticket === editItem.type_ticket
            ? { ...item, disabled: false }
            : { ...item, disabled: true }
        )
      );
    }
    if (editItem === null) {
      reset();
      console.log("NULL");
      
      setBilletData((prevData) =>
        prevData.map((item) => ({ ...item, disabled: true }))
      );
      setNewTicket((prev) =>
        prev.map((item) => ({ ...item, disabled: false }))
      );
    }
  }, [editItem]);

  const setAbleTicket = useCallback(
    (row) => {
      console.log("Edit", editRef?.current);
      console.log("ROW", row);
      const refEditItem = editRef?.current;
      const currentBilletData = billetDataCurrent?.current
      const refNewTicket = newTicketRef?.current
      const lastEdit = refEditItem;
      console.log("Avant Dans New", newTicket);
      if (refNewTicket.find((item) => item.type_ticket === row.type_ticket)) {
        //CAS 1 Click sur NewTicket
        console.log("CAS 1");
        
        setEditItem(null);
      } else if (refEditItem === null) {
        // en Edition Null => Ajouter
        setEditItem(
          currentBilletData.find((item) => item.type_ticket === row.type_ticket)
        );
      } else if (
        lastEdit !== null &&
        lastEdit?.type_ticket !== row.type_ticket
      ) {
        // Cas 3 : Existe mais changer le ticket en edition
        console.log("SETT");
        reset();
        setBilletData((datas) =>
          datas.map((item) =>
            item.type_ticket === refEditItem?.type_ticket
              ? { ...item, disabled: true }
              : item
          )
        );
        setEditItem(
          currentBilletData.find((item) => item.type_ticket === row.type_ticket)
        );
      } else setEditItem(null);
    },
    [billetData, editRef]
  );

  const ajouterNouveauBillet = () => {
    const nouveauBillet = {
      type_ticket:
        newTicket.length > 0
          ? `type_${newTicket.length + billetData.length + 1}`
          : `type_${billetData.length + 1}`,
      nb_ticket: "",
      prix: "",
      total: "",
      disabled: editItem ? true : false,
    };
    newTicket.forEach((item) => {
      if (nouveauBillet.type_ticket === item.type_ticket) {
        nouveauBillet.type_ticket = `type_${
          newTicket.length + billetData.length + 2
        }`;
      }
    });
    setNewTicket((p) => [...p, nouveauBillet]);
    // setBilletData((b) => [...b, nouveauBillet]);
  };

  const supprimerBillet = (row) => {
    setNewTicket((prevData) => prevData.filter((item) => item !== row));
    reset();
  };

  const DisplayBillet = useCallback(
    (ticketList) => {
      return ticketList.map((row, index) => (
        <TableRow
          key={row.type_ticket}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
          }}
        >
          <TableCell component="th" scope="row">
            <ControlInput
              control={control}
              watch={watch}
              type="text"
              register={register}
              disabled={row.disabled}
              setValue={setValue}
              getValue={getValues}
              name={`type_ticket_${row.type_ticket}`}
              defaultValue={row.type_ticket}
            />
          </TableCell>
          <TableCell component="th" scope="row">
            <ControlInput
              control={control}
              watch={watch}
              disabled={row.disabled}
              type="number"
              register={register}
              setValue={setValue}
              getValue={getValues}
              name={`nb_ticket_${row.type_ticket}`}
              defaultValue={row.nb_ticket}
            />
          </TableCell>
          <TableCell component="th" scope="row">
            <ControlInput
              control={control}
              watch={watch}
              disabled={row.disabled}
              type="text"
              register={register}
              setValue={setValue}
              getValue={getValues}
              name={`prix_${row.type_ticket}`}
              defaultValue={row.prix}
            />
          </TableCell>
          <TableCell component="th" scope="row">
            <ControlInput
              control={control}
              watch={watch}
              disabled={row.disabled}
              type="number"
              register={register}
              setValue={setValue}
              getValue={getValues}
              name={`total_${row.type_ticket}`}
              defaultValue={row.total}
            />
          </TableCell>

          <TableCell align="right">
            <Stack
              gap={1}
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton>
                <MdOutlineModeEditOutline
                  size={25}
                  cursor="pointer"
                  color={row?.disabled ? "color.primary.error" : "#ababab"}
                  onClick={() => setAbleTicket(row)}
                />
              </IconButton>

              <IconButton disabled={row.disabled}>
                <MdOutlineDelete
                  size={25}
                  cursor="pointer"
                  color={row?.disabled ? "#ababab" : "red"}
                  onClick={() => supprimerBillet(row)}
                />
              </IconButton>

              <Box mt={0.8}>
                <ModalAjoutArchive />
              </Box>
            </Stack>
          </TableCell>
        </TableRow>
      ));
    },
    [control]
  );

  const onSubmit = async (data) => {
    if (editRef.current !== null) {
      const itemtoUpdate = {
        pk: editItem.pk,
        type_ticket: watch(`type_ticket_${editRef.current?.type_ticket}`),
        nb_ticket: watch(`nb_ticket_${editRef.current?.type_ticket}`),
        prix: watch(`prix_${editRef.current?.type_ticket}`),
      };
      console.log("Update T", itemtoUpdate);
      UpdateTicket({ slug: slug, pk: editItem.pk, data: itemtoUpdate }).then(
        (res) => {
          console.log("Res", res.data);
          setIsSubmit((v) => !v)
          // setEditItem(null)
          setBilletData((datas) =>
            datas.map((item) =>
              item.type_ticket === editRef.current?.type_ticket
                ? { ...item, disabled: true }
                : item
            )
          )
          setNewTicket((prev) =>
            prev.map((item) => ({ ...item, disabled: false }))
          );
        }
      );
      // setNewTicket([])
    } else {
      const nouveauBillet = ["type_ticket", "nb_ticket", "prix"];
      const tickets = () => {
        return newTicket.map((item, i) => {
          const ticketTypeName = item["type_ticket"];
          const watchedData = nouveauBillet.reduce((acc, key) => {
            const fieldName = `${key}_${ticketTypeName}`;
            acc[key] = watch(fieldName);
            return acc;
          }, {});
          return watchedData;
        });
      };
      const datas = tickets();
      CreateBulkTicket({ datas, slug })
        .then((res) => {
          setNewTicket([]);
          setIsSubmit((s) => !s);
          console.log(res.data);
        })
        .catch((err) => err);
    }
  };
  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
        <Headerc />
      </Box>
      <Stack
        sx={{
          bgcolor: "#fbfbfb",
        }}
      >
        <Stack
          sx={{
            direction: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mt: "20svh",
            padding: "20px 45px",
            height: "80svh",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="row" gap={2}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  width: "55%",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  boxShadow: 1,
                }}
              >
                <Typography
                  sx={{
                    ":after": {
                      content: "''",
                      display: "block",
                      bgcolor: "grey",
                      width: "45px",
                      height: "3px",
                      mt: 0.5,
                      ml: 0.5,
                    },
                    fontSize: "20px",
                  }}
                >
                  Création de billet
                </Typography>

                <Box sx={{ mt: 2.5, mx: "auto" }}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead sx={{ bgcolor: "#F8F7FA" }}>
                        <TableRow>
                          <TableCell sx={styleThead} align="center">
                            Type de billet
                          </TableCell>
                          <TableCell sx={styleThead} align="center">
                            Nombre de ticket
                          </TableCell>
                          <TableCell sx={styleThead} align="center">
                            Tarif
                          </TableCell>
                          <TableCell sx={styleThead} align="center">
                            Total
                          </TableCell>
                          <TableCell sx={styleThead} align="center">
                            Action
                          </TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {DisplayBillet(billetData)}
                        {newTicket.length > 0 ? DisplayBillet(newTicket) : null}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Button
                        sx={{
                          bgcolor: "#291F43",
                          color: "#fff",
                          mt: 1,
                          "&:hover": { bgcolor: "#291E25" },
                        }}
                        onClick={
                          billetData.length + newTicket.length < 3
                            ? ajouterNouveauBillet
                            : null
                        }
                      >
                        <MdAddCircle />
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        type="submit"
                        sx={{
                          border: "1px solid #291F43",
                          mt: 1,
                          fontSize: "14px",
                          padding: "3px 20px",
                        }}
                      >
                        Valider
                      </Button>
                      {/* <LoadingButton></LoadingButton> */}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: "45%" }}>
                <Box
                  sx={{
                    bgcolor: "#fff",
                    width: "100%",
                    height: "280px",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    boxShadow: 1,
                  }}
                >
                  <Visuel />
                </Box>
              </Box>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </>
  );
}

export default GestionBillet;
