import React from "react";

import Input from "@/shared/components/Input";
import Select from "@/shared/components/Select";
import RadioGroup from "@/shared/components/RadioGroup";
import File from "@/shared/components/File";

export interface RouterLink {
  name: string;
  path: string;
  title: string;
  component?: React.ComponentType;
}

export const ROUTER_LINKS: RouterLink[] = [
  { name: "input", path: "/input", title: "Input", component: Input },
  { name: "select", path: "/select", title: "Select", component: Select },
  {
    name: "radioGroup",
    path: "/radioGroup",
    title: "RadioGroup",
    component: RadioGroup,
  },
  { name: "file", path: "/file", title: "File", component: File },
];
