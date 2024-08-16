import { useEffect, useRef, useState } from "react";
import useAuth from "../services/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Box, setRef, Stack } from "@mui/material";
import { LoginRequest } from "../services/account";
import { useSearchParams } from "react-router-dom";
import { useTokenStore } from "../services/hooks/useTokenStore";
import CircularIndeterminate from "../components/circular";
import useVerifyToken from "../services/hooks/useVerifyToken";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const [timeout, setOut] = useState(true);
  const [useSearch] = useSearchParams();
  const { login, loginRequest, account } = useAuth();
  const { access } = useTokenStore.getState();
  const refLogin = useRef(false);

  useEffect(() => {
    if (account?.account_type === "pointdevente")
      navigate(`/point-de-vente/${account.pk}`);
    // else if (account?.account_type === "organisateur") {
    //   setOut(false);
    // }
    else if (account === null && !timeout) {
      console.log("useEffect", account);
      navigate("/signup");
    }
  }, [timeout]);

  useEffect(() => {
    const code = useSearch.get("code");

    if (code && access.length === 0) {
      const email = "leo13@gmail.com";
      const sub = "2121";
      try {
        // loginRequest({ email, sub })
        login(code)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              setOut(false);
            }
            if (res.status === 201) {
              const pk = res.data["pk"];
              navigate("/signup/account-type", { state: { pk: pk } });
            }
          })
          .catch((err) => {
            navigate("/signup");
          });
      } catch (error) {
        console.log("ERR", error)
      }
    }
    // }
    else if(access.length>0){
      useVerifyToken().then(res=>{
        if(res.status===200){
          console.log("Verifier", res.status);
          setOut(false)
        }
      }).catch(err=>{
        navigate("/signup")
      })
    }else navigate("/signup")
  }, [account])
  if (
    account?.account_type !== "pointdevente" &&
    account !== null &&
    !timeout
  ) {
    return <>{children}</>;
  }
  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <CircularIndeterminate />
    </Stack>
  );
}
