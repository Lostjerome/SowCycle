import axios from "axios";
import { A as API_URL } from "../../../chunks/private.js";
async function load() {
  const getAllStalls = () => axios(API_URL + `/stalls`).then((r) => r.data);
  return { stalls: await getAllStalls() };
}
export {
  load
};
