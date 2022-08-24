"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar_default,
  Button: () => Button_default
});
module.exports = __toCommonJS(src_exports);

// src/Avatar/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Avatar = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    children: "Avatar"
  });
};
var Avatar_default = Avatar;

// src/Button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    children: "Button"
  });
};
var Button_default = Button;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Button
});
