import { useEffect, useRef, useState } from "react";
import useAuth from "../services/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Box, setRef, Stack } from "@mui/material";
import { LoginRequest } from "../services/account";
import { useSearchParams } from "react-router-dom";
import { useTokenStore } from "../services/hooks/useTokenStore";
import CircularIndeterminate from "../components/circular";


export default function LayoutSignUp({ children }) {
  const navigate = useNavigate();
  const [timeout, setOut] = useState(false);
  const { login, loginRequest, account } = useAuth();

  useEffect(()=>{
    if(account?.account_type === "pointdevente")
      navigate(`/point-de-vente/${account.pk}`)
    else if (account?.account_type === "organisateur")
    navigate(`/accueil`)
  },[account])
  
  return<>{children}</>
}
