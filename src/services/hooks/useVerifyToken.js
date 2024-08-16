import { myAxios } from "../axios";
import { useTokenStore } from "./useTokenStore";

export default async function useVerifyToken() {
  const { access } = useTokenStore.getState();
  try {
    console.log("REFRE", access);
    const response = await myAxios.post(`/token/verify`, {
      token: access,
    });
    return response;
  } catch (error) {
    console.log("REFRE", error.message);
    throw error;
  }
}
