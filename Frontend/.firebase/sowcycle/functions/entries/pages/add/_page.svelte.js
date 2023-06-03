import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index2.js";
import { C as Container } from "../../../chunks/Container.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex flex-col bg-white rounded-xl p-3 gap-3"}"><div class="${"flex gap-3"}"><button${add_attribute("class", "bg-gray-300 p-3 w-full rounded-lg text-center", 0)}>หมู
                </button>
                <button${add_attribute("class", "bg-white p-3 w-full rounded-lg text-center", 0)}>คอก
                </button></div>
            ${`<div class="${"bg-gray-300 w-full h-52 rounded-lg"}">+</div>
                <input type="${"text"}" class="${"bg-gray-300 p-3 rounded-lg"}" placeholder="${"ชื่อแม่หมู"}">
                <select class="${"bg-gray-300 p-3 rounded-lg"}"><option value="${""}">เลือกคอกหมู</option><option value="${""}">1</option><option value="${""}">2</option><option value="${""}">3</option></select>
                <div class="${"flex gap-3"}"><button class="${"p-3 bg-gray-300 w-full rounded-lg text-center"}">ยกเลิก
                    </button>
                    <button class="${"p-3 bg-gray-300 w-full rounded-lg text-center"}">เพิ่มหมู
                    </button></div>`}</div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
