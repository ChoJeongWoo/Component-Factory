import React from "react";

import Test from "@/shared/components/card/Test";
import Input from "@/shared/components/Input.tsx"
import Select from "@/shared/components/Select";

export interface RouterLink {
  name: string;
  path: string;
  title: string;
  component?: React.ComponentType;
}

export const ROUTER_LINKS: RouterLink[] = [
  { name: "home", path: "/", title: "Home", component: Test },
  { name: "input", path: "/Input", title: "Input", component: Input },
  { name: "select", path: "/select", title: "Select", component: Select },
];
