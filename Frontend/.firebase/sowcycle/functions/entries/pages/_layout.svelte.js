import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const AddButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${"/add"}" class="${"w-16 h-16 bg-red-500 rounded-full flex justify-center items-center fixed bottom-5 right-5"}">Add
</a>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}
${validate_component(AddButton, "AddButton").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
