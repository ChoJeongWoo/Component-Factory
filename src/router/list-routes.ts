import React from "react";

import Test from "@/shared/components/card/Test";
import Test2 from "@/shared/components/card/Test2";
import Input from "@/shared/components/Input.tsx"

export interface RouterLink {
  name: string;
  path: string;
  title: string;
  component?: React.ComponentType;
}

export const ROUTER_LINKS: RouterLink[] = [
  { name: "home", path: "/", title: "Home", component: Test },
  { name: "input", path: "/Input", title: "Input", component: Input },
  { name: "home", path: "/", title: "Home", component: Test },
  { name: "form", path: "/forms", title: "Form" },
  { name: "home", path: "/", title: "Home", component: Test },
  { name: "form", path: "/forms", title: "Form" },
];
