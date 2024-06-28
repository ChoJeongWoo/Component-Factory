import { Outlet } from "react-router-dom";

import Header from "@/shared/components/Header";

function Layout() {
  return (
    <div className="relative px-4 sm:px-6">
      <Header />
      <Outlet />
      <footer className="flex justify-center items-center h-5 absolute bottom-0 w-full">
        Foooter 영역
      </footer>
    </div>
  );
}

export default Layout;
