import { c as create_ssr_component, d as add_attribute, a as validate_store, b as subscribe, v as validate_component } from "../../chunks/index2.js";
import { C as Container } from "../../chunks/Container.js";
import { w as writable } from "../../chunks/index.js";
const historyMode = writable(false);
const BoxLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} data-sveltekit-preload-data class="${"aspect-square w-full bg-white hover:bg-gray-100 duration-200 rounded-lg flex items-center justify-center"}">${slots.default ? slots.default({}) : ``}</a>`;
});
const SheduleList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full h-28 bg-white rounded-lg flex"}"><div class="${"aspect-square h-full bg-red-500 rounded-l-lg flex justify-center items-center"}">Count
    </div>
    <div class="${"p-3"}"><div><span>ชื่อ</span> ทองแท้
            <span>คอก</span> เลี้ยง 1
        </div>
        <div class="${"block"}"><span>ทับเมื่อ</span> วว/ดด/ปปปป
        </div>
        <div class="${"block"}"><span>ทับเมื่อ</span> วว/ดด/ปปปป
        </div></div></div>`;
});
const HIstoryList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full p-5 bg-white rounded-lg"}"><div><span>ชื่อ</span> <span>คอก</span></div>
    <div>คลอดเมื่อ</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $historyMode, $$unsubscribe_historyMode;
  validate_store(historyMode, "historyMode");
  $$unsubscribe_historyMode = subscribe(historyMode, (value) => $historyMode = value);
  $$unsubscribe_historyMode();
  return `<div>${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"space-y-5"}"><div class="${"flex gap-2"}">${validate_component(BoxLink, "Box").$$render($$result, { href: "/sows" }, {}, {
        default: () => {
          return `แม่หมู`;
        }
      })}
                ${validate_component(BoxLink, "Box").$$render($$result, { href: "/stalls" }, {}, {
        default: () => {
          return `คอก`;
        }
      })}</div>
            <div><div class="${"flex gap-2 mb-3"}"><button${add_attribute("class", ($historyMode ? "hover:bg-gray-200" : "bg-white") + " p-3 rounded-lg w-full text-center duration-200", 0)}>แม่หมูใกล้คลอด</button>
                    <button${add_attribute("class", (!$historyMode ? "hover:bg-gray-200" : "bg-white ") + " p-3 rounded-lg w-full text-center duration-200", 0)}>ประวัติการคลอด</button></div>
                <div class="${"space-y-2"}">${!$historyMode ? `${validate_component(SheduleList, "SheduleList").$$render($$result, {}, {}, {})}
                        ${validate_component(SheduleList, "SheduleList").$$render($$result, {}, {}, {})}
                        ${validate_component(SheduleList, "SheduleList").$$render($$result, {}, {}, {})}
                        ${validate_component(SheduleList, "SheduleList").$$render($$result, {}, {}, {})}
                        ${validate_component(SheduleList, "SheduleList").$$render($$result, {}, {}, {})}
                        ${validate_component(SheduleList, "SheduleList").$$render($$result, {}, {}, {})}
                        ${validate_component(SheduleList, "SheduleList").$$render($$result, {}, {}, {})}` : `${validate_component(HIstoryList, "HIstoryList").$$render($$result, {}, {}, {})}
                        ${validate_component(HIstoryList, "HIstoryList").$$render($$result, {}, {}, {})}
                        ${validate_component(HIstoryList, "HIstoryList").$$render($$result, {}, {}, {})}
                        ${validate_component(HIstoryList, "HIstoryList").$$render($$result, {}, {}, {})}`}</div></div></div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
