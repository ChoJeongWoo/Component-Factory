import { Outlet } from "react-router-dom";

import Header from "@/shared/components/Header";
import Snb from "@/shared/components/Snb";

function DetailLayout() {
  return (
    <div className="relative px-4 sm:px-6">
      <Header />
      <Snb />
      <Outlet />
    </div>
  );
}

export default DetailLayout;
