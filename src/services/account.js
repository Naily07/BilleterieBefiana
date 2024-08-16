const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

import myAxiosPrivate, { myAxios } from "../services/axios";
import { useTokenStore } from "./hooks/useTokenStore";

/**
 * @params  code - code d'access donnée par l'user
 * @returns response - axios object {data : token}
 */
export async function LoginUser(code) {
  // const sub = "1029387264104303134061"
  // const email = "leonela25@gmail.com"
  console.log("code", code);
  try {
    const res = await myAxios.post(`/account/login`, {
      // sub: sub,
      // email: email,
      code: code,
    });
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/**
 *
 * @param {*} code code d'access donnée par l'user
 * @returns res - data contient l'utilisateur crée
 */
export async function RegisterUser(code) {
  try {
    const res = await myAxios.post(`${API_BASE_URL}/account/register/`, {
      code: code,
    });
    return res;
  } catch (error) {
    throw error;
  }
}

/**
 * @param {*} id - identifiant de l'user crée
 * @returns user activé
 */
export async function UpdateRegister(req) {
  try {
    const res = await myAxios.patch(`account/register/${req.pk}`, req);
    return res;
  } catch (error) {
    throw error;
  }
}

/**
 *
 * @param {0} email email de l'user a crée
 * @param {1} lieu lieu du pdv, blank True
 * @param {2} list_event tableau de type string contient list event
 * @returns pdv enregistrer non activé
 */
export async function RegisterPDV({ email, lieu, list_event }) {
  const { access } = useTokenStore.getState();
  try {
    const res = await myAxiosPrivate.post(`account/point-de-vente/register`, {
      email: email,
      lieu: lieu,
      list_event: list_event,
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
 * @return user object
 */
export async function LogoutUser() {
  const { access } = useTokenStore.getState();
  try {
    const res = myAxios.get("account/logout", {
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
 * @param {0} objet avec email et sub - identifiant de l'user crée
 * @returns Token
 */
export async function LoginRequest({ email, sub }) {
  try {
    const res = await myAxios.post(`account/login/request`, {
      email: email,
      sub: sub,
    });
    return res;
  } catch (error) {
    throw error;
  }
}
