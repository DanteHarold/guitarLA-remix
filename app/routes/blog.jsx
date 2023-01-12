import { Outlet } from "@remix-run/react";
import React from "react";

import styles from "~/styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function Blog() {
  return (
    <div className="contenedor">
      <Outlet />
    </div>
  );
}
