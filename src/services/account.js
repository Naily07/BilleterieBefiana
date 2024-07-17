const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL

import myAxiosPrivate, { myAxios } from '../services/axios'
import { useTokenStore } from './hooks/useTokenStore'

/**
 * @params  code - code d'access donnée par l'user
 * @returns response - axios object {data : token}
*/
export async function  LoginUser(sub, email){
    try {
        const res = await myAxios
        .post(`${API_BASE_URL}/account/login/`,{
            sub : sub,
            email : email
        }
    )
        console.log(res)
        return res
    } catch (error) {
        console.log(error);
        throw error
    }
}

/**
 * 
 * @param {*} code code d'access donnée par l'user
 * @returns res - data contient l'utilisateur crée
 */
export async function RegisterUser(code){
    try {
        const res = await myAxios
        .post(`${API_BASE_URL}/account/register/`,{
            code : code
        })
        return res
    } catch (error) {
        throw error
    }
}

/**
 * @param {*} id - identifiant de l'user crée 
 * @returns user activé
 */
export async function UpdateRegister(id){
    try {
        const res = await myAxios
        .post(`${API_BASE_URL}/account/register?pk=${id}`,{
            code : code
        })
        return res
    } catch (error) {
        throw error        
    }
}

/**
 * 
 * @param {0} email email de l'user a crée 
 * @param {1} lieu lieu du pdv, blank True 
 * @param {2} list_event tableau de type string contient list event
 * @returns pdv enregistrer non activé
 */
export async function RegisterPDV({email, lieu, list_event}){
    try {
        const res = await myAxiosPrivate
        .post(`${API_BASE_URL}/account/point-de-vente/register/`,{
            email : email,
            lieu : lieu,
            list_event : list_event 
        })
        return res
    } catch (error) {
        throw error        
    }
}

/**
 * @return user object
 */
export async function LogoutUser(){
    const {access} = useTokenStore.getState() 
    try {
        const res = myAxios.get('/account/logout',
        {
            headers : {
                Authorization : `Bearer ${access}`
            }
        }
    )
    } catch (error) {
        throw error
    }
}