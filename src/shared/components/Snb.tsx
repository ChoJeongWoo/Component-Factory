import { Link, useLocation } from "react-router-dom";

import { ROUTER_LINKS } from "@/router/list-routes";
import { useEffect, useState } from "react";

const Snb: React.FC = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-4 px-2">
      <span>COMPONENTS</span>

      {ROUTER_LINKS.map((link) => (
        <Link
          className="pointer-events-auto group block whitespace-nowrap py-2 px-6 text-white/80 transition-colors duration-200 hover:text-white lg:py-0 lg:px-0 lg:text-sm data-[active=true]:text-white"
          data-active={pathname === link.path}
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
