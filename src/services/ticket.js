import myAxiosPrivate from "./axios";
import { useTokenStore } from "./hooks/useTokenStore";

/**
 *
 * @param {*} slug slug event
 */
export async function ListTicketEvent(slug) {
  const { access } = useTokenStore.getState();
  try {
    const response = await myAxiosPrivate.get(`event/${slug}/list-tickets`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
/**
 *
 * @param {0} pk pk Ticket
 * @param {1} slug slug event
 * @param {1} data listDes modification with pk
 */
export async function UpdateTicket({ pk, slug, data }) {
  const { access } = useTokenStore.getState();
  try {
    const response = await myAxiosPrivate.patch(
      `event/${slug}/update-ticket/${pk}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}
/**
 *
 * @param {*} slug slug event
 */
export async function ListAddTicketEventOrganisateur({ pk, slug }) {
  const { access } = useTokenStore.getState();
  try {
    const response = await myAxiosPrivate.get(
      `account/point-de-vente/${pk}/${slug}/list-create-Addtickets`,
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}
/**
 *
 * @param {0} slug
 * @returns
 */
export async function ListAddTicketEvent(slug) {
  const { access } = useTokenStore.getState();
  try {
    const response = await myAxiosPrivate.get(`event/${slug}/list-Addtickets`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
/**
 * @param {0} data list de ticket
 * @param {1} slug
 * @returns
 */
export async function CreateBulkTicket({ datas, slug }) {
  const { access } = useTokenStore.getState();
  console.log("LOGEER", datas, slug);
  try {
    const response = await myAxiosPrivate.post(
      `event/${slug}/create-tickets`,
      datas,
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}
// point-de-vente/<int:pdvId>/<slug:slug>/update-Addtickets/<int:pk></int:pk>
/**
 * @param {0} data list de AddTicketForm
 * @param {1} slug
 * @param {1} pdvId
 * @returns
 */
export async function updateBulkAddTicket({ datas, slug, pdvId }) {
  const { access } = useTokenStore.getState();
  console.log("LOGEER", datas, slug);
  try {
    const response = await myAxiosPrivate.patch(
      `account/point-de-vente/${pdvId}/${slug}/update-Addtickets`,
      datas,
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}
/**
 * @param {0} data list de AddTicketForm
 * @param {1} slug
 * @param {1} pdvId
 * @returns
 */
export async function buyTicket({slug, datas}) {
  const { access } = useTokenStore.getState();
  console.log("LOGEER", datas, slug);
  try {
    const response = await myAxiosPrivate.post(
      `event/${slug}/buy-ticket`,
      datas,
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}
