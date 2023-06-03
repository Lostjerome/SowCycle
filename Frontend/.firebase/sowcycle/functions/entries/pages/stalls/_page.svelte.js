import { c as create_ssr_component, v as validate_component, h as each, e as escape } from "../../../chunks/index2.js";
import { C as Container } from "../../../chunks/Container.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { stalls } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `Stalls
        <div class="${"space-y-2"}">${each(stalls, (stall) => {
        return `<div class="${"w-full bg-white rounded-lg p-3"}"><p>ชื่อ ${escape(stall.name)}</p>
                    <p>สถานะ ${escape(stall.status)}</p>
                    <p>ประเภท ${escape(stall.stall_type)}</p>
                </div>`;
      })}</div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
