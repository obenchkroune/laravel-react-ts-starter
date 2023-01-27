import "./bootstrap";

import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { hydrateRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
    return pages[`./Pages/${name}.tsx`];
  },
  // @ts-ignore
  setup({ el, App, props }) {
    return hydrateRoot(el, <App {...props} />);
  },
});
