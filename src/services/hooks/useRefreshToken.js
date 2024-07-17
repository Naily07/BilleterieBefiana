import { myAxios } from "../axios"
import {useTokenStore} from "./useTokenStore";

export default async function useRefreshToken(){
  const store = useTokenStore.getState()
  const refresh = store.refresh
  try {
      console.log("REFRE", refresh);
      const response = await myAxios.post(`/token/refresh/`,
      )
      return response
  } catch (error) {
      console.log("REFRE", error.message);
      throw error
}
}