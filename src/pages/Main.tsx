import { Link } from "react-router-dom";
import { ROUTER_LINKS } from "@/router/list-routes";

import React from "react";

const Card = () => {
  return (
    <div className="mt-2 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {ROUTER_LINKS.map((link) => (
        <Link
          className="group focus:outline-none"
          to={link.path}
          key={link.path}
        >
          <div className="relative flex h-64 items-center justify-center bg-white/[4%] transition-colors group-hover:bg-white/[6%] group-focus-visible:ring-1 group-focus-visible:ring-white">
            {link.component ? React.createElement(link.component) : null}
          </div>
          <div className="mt-2 truncate pt-2.5 text-sm font-semibold text-white">
            {link.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

const Main = () => {
  return (
    <main className="px-4 sm:px-6 pb-12">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-x-4 grid h-full grid-cols-1 gap-y-6 sm:-inset-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTER_LINKS.map((link) => (
            <div className="relative h-64 sm:block lg:block" key={link.path}>
              {/* <div className="absolute inset-x-0 -inset-y-[calc(0.5rem+1px)] border-y border-white text-white"></div> */}
              <div className="absolute inset-x-0 -inset-y-[calc(0.5rem+1px)] border-y border-white/[7.5%]  text-white"></div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-2 pb-8">
          <Card />
        </div>
      </div>
    </main>
  );
};

export default Main;
