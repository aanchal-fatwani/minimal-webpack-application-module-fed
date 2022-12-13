import React from "react";
import { createRoot } from "react-dom/client";

const mount = (el) => {
  // const rootEle = document.getElementById("root");
  const root = createRoot(el);
  root.render(<div style={{ backgroundColor: "aqua", height: "60px" }}></div>);
};

// window.mountHeader = mount;

if (!window.containerContext) mount(document.getElementById("root"));

export { mount };
