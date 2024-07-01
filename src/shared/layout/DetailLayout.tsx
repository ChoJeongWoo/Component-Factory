import { Outlet } from "react-router-dom";

import Header from "@/shared/components/Header";
import Snb from "@/shared/components/Snb";

import { useCounterStore } from "@/shared/stores/menuStore";

const DetailLayout: React.FC = () => {
  const { menu } = useCounterStore();

  return (
    <div className="relative px-4 sm:px-6">
      <Header />
      <div className="flex items-start mx-auto max-w-7xl px-2 py-6">
        <Snb />
        <main className="min-w-full px-28">
          <h2 className="font-bold text-4xl mb-4">{menu.title}</h2>

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DetailLayout;
