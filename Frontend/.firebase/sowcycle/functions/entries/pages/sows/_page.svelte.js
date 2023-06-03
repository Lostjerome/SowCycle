import { c as create_ssr_component, v as validate_component, h as each, e as escape } from "../../../chunks/index2.js";
import { C as Container } from "../../../chunks/Container.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { sows } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `Sows
        <div class="${"space-y-2"}">${each(sows, (sow) => {
        return `<div class="${"w-full bg-white rounded-lg p-3"}"><p>ชื่อ ${escape(sow.name)}</p>
                    <p>คอก ${escape(sow.stall.name)}</p>
                    <div>${escape(sow.status)}</div>
                </div>`;
      })}</div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
