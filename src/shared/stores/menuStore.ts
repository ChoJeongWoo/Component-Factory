import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { RouterLink } from "@/router/list-routes";

interface MenuStore {
  menu: RouterLink;
  setMenu: (newMenu: RouterLink) => void;
  clearMenu: () => void;
}

const menu = { name: "", path: "", title: "" };

export const useCounterStore = create<MenuStore>()(
  devtools((set) => ({
    menu,
    setMenu: (newMenu) => set({ menu: newMenu }),
    clearMenu: () => set({ menu }),
  }))
);
