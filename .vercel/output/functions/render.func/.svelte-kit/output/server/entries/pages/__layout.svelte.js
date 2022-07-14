import { c as create_ssr_component } from "../../immutable/chunks/index-b9efae8a.js";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  _layout as default
};
