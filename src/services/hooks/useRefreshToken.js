import { myAxios } from "../axios"
import {useTokenStore} from "./useTokenStore";

export default async function useRefreshToken(){
  const {refresh} = useTokenStore.getState()
  try {
      console.log("REFRE", refresh);
      const response = await myAxios.post(`/token/refresh/`,{refresh : refresh}
      )
      return response
  } catch (error) {
      console.log("REFRE", error.message);
      throw error
}
}