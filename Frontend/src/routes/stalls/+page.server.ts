import axios from "axios";
import { API_URL } from "$env/static/private";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const getAllStalls = () => axios(API_URL + `/stalls`).then((r) => r.data);

    return { stalls: await getAllStalls() };
}
