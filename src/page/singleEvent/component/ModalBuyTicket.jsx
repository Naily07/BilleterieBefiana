import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Stack } from "@mui/material";
import { buyTicket } from "../../../services/ticket"
import { useParams, useSearchParams } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
//   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalBuy({ totalPrice, listTicket, watch }) {
  const handleOpen = (value) => {
    setTextValue(value);
    setOpen(true);
  }
  const params = useParams()
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [textValue, setTextValue] = useState(null);
  const buyFunction = () => {
    const datas = []
    console.log(listTicket);
    
    listTicket.forEach((element, i) => {
        if (parseInt(watch(element.type_ticket))>0)
            datas.push({type_ticket : (element.type_ticket), nb_ticket :parseInt(watch(element.type_ticket))})
    });
    console.log(params.slug);
    if (datas.length>0)
        buyTicket({slug : params.slug, datas}).then(res=>handleClose())
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            width: "300px",
            height: "50px",
            bgcolor: "#fff",
            border: "1px solid rgba(0, 0, 0, 0.35)",
            mx: "auto",
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: "5px",
            cursor: "pointer",
            "&:hover": { bgcolor: "#F4F2FF" },
          }}
          onClick={() => handleOpen("Orange Money")}
        >
          <Typography>Acheter avec </Typography>
          <Typography sx={{ color: "orange" }}>Orange Money</Typography>
        </Box>
        <Box
          sx={{
            width: "300px",
            height: "50px",
            bgcolor: "#fff",
            mx: "auto",
            mt: 2,
            display: "flex",
            alignItems: "center",
            border: "1px solid rgba(0, 0, 0, 0.35)",
            justifyContent: "space-around",
            borderRadius: "5px",
            cursor: "pointer",
            "&:hover": { bgcolor: "#F4F2FF" },
          }}
          onClick={() => handleOpen("Telma")}
        >
          <Typography>Acheter avec </Typography>
          <Typography sx={{ color: "green" }}>Telma MVola</Typography>
        </Box>
      </Box>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Stack sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Acheter Vôtre Billet avec {textValue}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight : 600}} component={'h5'} >
              Total : {totalPrice} Ar
            </Typography>
            <Stack flexDirection={"row"} gap={2}>
              {listTicket?.length > 0
                ? listTicket.map((item) => {
                    return (
                      <>
                        {parseInt(watch(item.type_ticket)) > 0 ? (
                          <Box sx={{ p: "10px" }}>
                            <Typography
                              fontWeight={"600"}
                              textDecoration="underline"
                            >
                              {item.type_ticket} :{" "}
                            </Typography>
                            <Typography fontWeight={"600"}>
                              {parseInt(watch(item.type_ticket)) < 10
                                ? "0" + watch(item.type_ticket)
                                : watch(item.type_ticket)}
                            </Typography>
                          </Box>
                        ) : (
                          ""
                        )}
                      </>
                    );
                  })
                : ""}
            </Stack>
            <Button variant="contained" onClick={buyFunction} sx={{mt:1}}>
              Valider
            </Button>
          </Stack>
        </Modal>
      </div>
    </>
  );
}
