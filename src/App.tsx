import Main from "@/pages/Main";

function App() {
  return (
    <>
      <Main />

      <div
        className="pointer-events-none absolute inset-0 z-10 px-4 sm:px-6 bg-white/10 min-h-lvh"
        aria-hidden="true"
      >
        <div className="mx-auto flex h-full max-w-[calc(var(--width-7xl)+2px)] gap-[14px]">
          <div className="flex-1 border-x border-white/[7.5%]"></div>
          <div className="hidden flex-1 border-x border-white/[7.5%] sm:block"></div>
          <div className="hidden flex-1 border-x border-white/[7.5%] lg:block"></div>
        </div>
      </div>
    </>
  );
}

export default App;
