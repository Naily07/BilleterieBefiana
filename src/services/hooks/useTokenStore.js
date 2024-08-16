import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
export const useTokenStore = create(
  persist((set, get) => ({
    access: "",
    refresh: "",
    setAccessToken: (newAccessToken) => set(() => ({ access: newAccessToken })),
    setRefreshToken: (newRefreshToken) =>
      set(() => ({ refresh: newRefreshToken })),
  }), { name: "token"})
);

// export const useTokenStore = create(
//   persist(
//     (get, set) => ({
//       access: "",
//       refresh: "",
//       setAccessToken : (newAccessToken)=>set(()=>({access : newAccessToken})),
//     setRefreshToken : (newRefreshToken)=>set(()=>({refresh : newRefreshToken})),
//     {
//       name: "token", // name of the item in the storage (must be unique)
//     }
//   )
// );
