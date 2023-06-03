import { c as create_ssr_component } from "./index2.js";
const app = "";
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-gray-300 w-full min-h-screen max-w-md m-auto p-3"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Container as C
};
