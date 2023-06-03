import axios from "axios";
import { A as API_URL } from "../../../chunks/private.js";
async function load() {
  const getAllSows = () => axios.get(API_URL + `/sows`).then((r) => r.data);
  return { sows: await getAllSows() };
}
export {
  load
};
