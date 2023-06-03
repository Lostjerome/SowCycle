import axios from "axios";
import { API_URL } from "$env/static/private";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const getAllSows = () => axios.get(API_URL + `/sows`).then((r) => r.data);

    return { sows: await getAllSows() };
}
