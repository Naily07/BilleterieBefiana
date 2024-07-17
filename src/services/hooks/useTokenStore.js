import {create} from 'zustand'

export  const useTokenStore = create((set)=>({
    access: "",
    refresh: "",
    setAccessToken : (newAccessToken)=>set(()=>({access : newAccessToken})),
    setRefreshToken : (newRefreshToken)=>set(()=>({refresh : newRefreshToken})),
}))