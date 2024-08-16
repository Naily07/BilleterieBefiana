import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { RegisterPDV } from "../../services/account";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

// const listeEvent = ["Festivale", "Soirée", "Foire", "Sport", "Conférence"];

const FuncListEvent = ({listEvent, register, setListEventSelect}) => {
  const handleChange = (event) => {
    if (event.target.checked) {
      setListEventSelect((prev) => [...prev, event.target.value]);
    } else {
      setListEventSelect((prev) => prev.filter((v) => v !== event.target.value));
    }
    // register("list_event", listEventSelect);
  }
  return (
    <>
      {listEvent.length>0 && listEvent?.map((v, i) => (
        <Box
          key={i}
          sx={{
            width: "100%",
            height: "35px",
            display: "flex",
            alignItems: "center",
            padding: "0px 10px",
            justifyContent: "space-between",
          }}
        >
          <Typography>{v?.nom}</Typography>
          <Checkbox  value={v?.nom} onChange={handleChange} /> 
        </Box>
      ))}
    </>
  );
};

export default function AjoutPointDeVente({listEvent}) {
  const [open, setOpen] = useState(false);
  const [listEventSelect, setListEventSelect] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    data['list_event'] = listEventSelect;
    console.log(data);
    RegisterPDV(data).then((res) => {
      if (res.status === 200 || res.status === 201) {
        console.log(res.data);
      }
    });
  };
  console.log(listEvent);
  return (
    <>
      <Box>
        <Button
          onClick={handleOpen}
          sx={{
            textTransform: "lowercase",
            color: "#fff",
            border: "1px solid ",
            bgcolor: "#1E0A3C",
            padding: "9px 30px",
            "&:hover": { bgcolor: "#1E0A3C" },
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          ajouter un points de vente
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ borderBottom: "1px solid rgba(0,0,0,0.35)", width: "206px" }}
          >
            Crée un point de vente
          </Typography>
          <Box mt={4} gap={1}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{}}>
                <Typography>Nom d utilisateurs</Typography>
                <TextField fullWidth size="small" sx={{ mt: 1 }} />
                <Typography sx={{ mt: 1.5 }}>Adress Email</Typography>
                <TextField
                  {...register("email",  {required: "email requis"})}
                  placeholder="email"
                  type="email"
                  fullWidth
                  size="small"
                  sx={{ mt: 1 }}
                />
                <Typography sx={{ mt: 1.5 }}>Lieu</Typography>
                <TextField
                  type="lieu"
                  fullWidth
                  size="small"
                  sx={{ mt: 1 }}
                  {...register("lieu")}
                />
              </Box>
              <Box
                sx={
                  {
                    /* height: "200px" */
                  }
                }
              >
                <Box sx={{ mt: 2.5 }}>
                  <Accordion defaultExpanded size="small">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>Sélctionner les évènements</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ maxHeight: "100px", overflowY: "auto" }}>
                        <FuncListEvent listEvent={listEvent} register={register} setListEventSelect={setListEventSelect} />
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  mt: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "180px",
                    gap: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      // border: "1px solid rgba(0, 0, 0, 0.10)",
                      bgcolor: "secondary.light",
                      // color: "#fff",
                      fontWeight: "600",
                      // padding: "5px 15px",
                      "&:hover": { bgcolor: "secondary.main" },
                    }}
                  >
                    Envoyer
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{
                      border: "1px solid rgba(0, 0, 0, 0.10)",
                      bgcolor: "customWhite.main",
                      color: "#000",
                      fontSize: "1rem",
                      "&:hover": { bgcolor: "#EEE" },
                      padding: "6px 14px",
                    }}
                  >
                    Retour
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
