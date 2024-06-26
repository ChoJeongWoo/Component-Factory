import Header from "@/shared/components/Header";
import Main from "@/pages/Main";

function App() {
  return (
    <div className="relative">
      <Header />

      {/* <div className="mx-auto flex max-w-7xl items-center justify-between py-6 text-sm">
        <div className="rounded-full bg-white/15 py-1 px-2 font-light ">
          v.0.0.1
        </div>
      </div> */}

      <Main />

      <div
        className="pointer-events-none absolute inset-0 z-10 px-4 sm:px-6 bg-white/10 min-h-lvh"
        aria-hidden="true"
      >
        <div className="mx-auto flex h-full max-w-[calc(var(--width-7xl)+2px)] gap-[14px]">
          <div className="flex-1 border-x border-white/[7.5%]"></div>
          <div className="hidden flex-1 border-x border-white/[7.5%] sm:block"></div>
          <div className="hidden flex-1 border-x border-white/[7.5%] lg:block"></div>

          {/* <div className="flex-1 border-x border-white"></div>
          <div className="hidden flex-1 border-x border-white sm:block"></div>
          <div className="hidden flex-1 border-x border-white lg:block"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
