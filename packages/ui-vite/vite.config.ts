import path from "path";

import { UserConfigExport } from "vite";
import dts from "vite-plugin-dts";

const getBaseViteConfig = (
  dirname: string,
  name: string,
  override?: UserConfigExport
): UserConfigExport => {
  const isExternal = (id: string) =>
    !id.startsWith(".") && !path.isAbsolute(id);

  return {
    esbuild: {
      jsxInject: "import React from 'react'",
    },
    build: {
      lib: {
        entry: path.resolve(dirname, "src/index.tsx"),
        formats: ["es", "umd"],
        name: `${name}`,
        fileName: (format) => `${name}.${format}.js`,
      },
      rollupOptions: {
        external: isExternal,
      },
    },
    plugins: [dts()],
    ...override,
  };
};

export default getBaseViteConfig(__dirname, "ui-vite");
