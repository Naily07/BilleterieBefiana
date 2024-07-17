import myAxiosPrivate, { myAxios } from './axios.js'
// import { getToken, setToken } from './api'
import { useTokenStore } from './hooks/useTokenStore.js'

/**
 * 
 * @returns axios object with data list-event
 */
export async function GetLisEvent(){
    const {access} = useTokenStore.getState()
    console.log("Acces", access);
    try {
        const res = await myAxiosPrivate
            .get(`/event/list/`,{
                headers : {
                    Authorization : `Bearer ${access}`
                }
            })
        console.log(res);
        return res
    } catch (error) {
        throw error
    }
}

/**
 * 
 * @param {*} formData data avec files(sponsors, image)
 * @returns evenement crée
 */
export  async function CreateEvent(formData){
    const {access} = useTokenStore.getState()
    try {
        const response = await myAxiosPrivate.post(`/event/list/`, formData, {
            headers: {
                Authorization: `Bearer ${access}`
            }
        })
        // Gérer la réponse ici
        console.log("log", response)
        return response
    } catch (error) {
        // Gérer les erreurs ici
        console.error(error)
        throw error
    }

}

/**
 * 
 * @param {*} slug slug event
 */
export async function GetOneEvent(slug){
    const {access} = useTokenStore.getState()
    try {
        const response = await myAxiosPrivate.get(`/event/${slug}`,{
            headers : {
                Authorization : `Bearerr ${access}`
            }
        })
        return response
    } catch (error) {
        throw error
    }
}