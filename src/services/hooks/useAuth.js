import { useCallback } from "react";
import { useTokenStore } from "./useTokenStore";
import { LoginRequest, LoginUser } from "../account";
import { useAccountStore } from "./useAccountStore";
import { useNavigate } from "react-router-dom";
export default function useAuth() {
  const store = useTokenStore.getState();
  const navigate = useNavigate();
  const { account, setAccount } = useAccountStore.getState();
  const setAccessToken = store.setAccessToken;
  const setRefreshToken = store.setRefreshToken;
  const login = useCallback(async (code) => {
    try {
      const res = await LoginUser(code);
      try {
        if (res.status === 200) {
          setAccessToken(res.data["access_token"]);
          setAccount(res.data["access_token"]);
          setRefreshToken(res.data["refresh_token"])
          navigate("/accueil")
        }
      } catch (error) {
        console.log("ERR", error);
      }
      return res;
    } catch (error) {
      throw error;
    }
  }, []);
  const loginRequest = useCallback(async ({ email, sub }) => {
    try {
      const res = await LoginRequest({ email, sub });
      try {
        setAccessToken(res.data["access_token"]);
        setAccount(res.data["access_token"]);
        setRefreshToken(res.data["refresh_token"]);
      } catch (error) {
        console.log("ERR", error);
      }
      return res;
    } catch (error) {
      throw error;
    }
  }, []);

  const logout = () => {
    console.log("OUT");
    setAccessToken("");
    setAccount(null);
    setRefreshToken("");
    navigate("/signup")
  };
  return {
    login,
    loginRequest,
    account,
    logout,
  };
}
