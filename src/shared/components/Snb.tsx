import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ROUTER_LINKS } from "@/router/list-routes";

import { useCounterStore } from "@/shared/stores/menuStore";

const Snb: React.FC = () => {
  const location = useLocation();
  const { setMenu, clearMenu } = useCounterStore();

  useEffect(() => {
    const menu = ROUTER_LINKS.find((link) => link.path === location.pathname);

    menu ? setMenu(menu) : clearMenu();
  }, [location.pathname, setMenu, clearMenu]);

  return (
    <div className="max-w-7xl flex flex-col gap-4">
      <span className="text-white/80 font-bold">COMPONENTS</span>

      {ROUTER_LINKS.map((link) => (
        <Link
          className="pointer-events-auto group block whitespace-nowrap py-2 px-6 text-white/80 transition-colors duration-200 hover:text-white lg:py-0 lg:px-0 lg:text-sm data-[active=true]:text-white"
          data-active={location.pathname === link.path}
          to={link.path}
          key={link.path}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Snb;
