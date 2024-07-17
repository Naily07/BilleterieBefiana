import { Box, Icon, Stack, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { AddCircle } from "@mui/icons-material";

export default function VenteTicket({ setTotalPrice, price, typeTicket }) {
  const [compteur, setCompteur] = useState(0);
  const [localPrice, setLocalPrice] = useState(0);
  const constPrice = price
  const ref = useRef(false);
  const increment = () => {
    setCompteur((prevCompteur) => prevCompteur + 1);
  };

  const decrement = () => {
    setCompteur((prevCompteur) => (prevCompteur > 0 ? prevCompteur - 1 : 0));
  };

  useEffect(() => {
    if (ref.current) {
        ref.current = false;
        return;
    }
    const newLocalPrice = price * compteur;
    const priceDifference = newLocalPrice - localPrice;
    
    setLocalPrice(newLocalPrice);

    setTotalPrice((lastPrice) => lastPrice + priceDifference);
  }, [compteur, price, localPrice, setTotalPrice]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          // flexDirection: "column",
        }}
      >
        <Box
          gap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "400px",
          }}
        >
          <Box
            mt={2}
            sx={{
              minWidth: "300px",
              height: "50px",
              bgcolor: "#fff",
              border: "1px solid rgba(0, 0, 0, 0.35)",
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
              justifyContent: "space-between",
            }}
          >
            <Typography ml={1}>{typeTicket}<Typography variant="span" ml={1} color = "#AAA" fontSize={"14px"}>({constPrice} Ar) </Typography></Typography>
            <Box
              sx={{
                width: "45%",
                bgcolor: "#F4F2FF",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                borderRadius: "5px",
              }}
            >
              <RemoveCircleIcon
                onClick={decrement}
                sx={{ color: compteur === 0 ? "#AAA" : "#000"}}
                cursor="pointer"
                disabled={compteur === 0}
                // color={compteur === 0 ? "#AAA" : "#000"}
              />

              <Typography> {compteur} </Typography>

              <AddCircle
                onClick={increment}
                sx={{ color: "#000", cursor: "pointer" }}
              />
            </Box>
          </Box>
          <Stack alignItems={"center"}>
            <Typography mt={2} sx={{ textDecoration : "underline", fontWeight : "500" }}>{localPrice} Ar</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
