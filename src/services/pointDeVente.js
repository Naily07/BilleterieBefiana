const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

import myAxiosPrivate, { myAxios } from "./axios"
import { useTokenStore } from "./hooks/useTokenStore"
/**
 * @access credential organisateur
 * @return user list
 */
export default async function ListPdv() {
  const { access } = useTokenStore.getState()
  console.log("Acccc", access);
  try {
    const res = myAxiosPrivate.get("account/point-de-vente/list", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
}
/**
 * @access credential organisateur
 * @return user list
 */
export async function CreatePdv(data) {
  const { access } = useTokenStore.getState()
  console.log("Acccc", access);
  try {
    const res = myAxiosPrivate.post("account/point-de-vente/list", data, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
}
