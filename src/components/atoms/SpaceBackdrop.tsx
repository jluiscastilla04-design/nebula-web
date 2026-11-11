export const SpaceBackdrop = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="starfield absolute inset-0" />
    <div className="absolute -left-32 -top-40 size-[520px] rounded-full bg-violet opacity-45 blur-[110px]" />
    <div className="absolute right-0 top-10 size-[460px] rounded-full bg-cyan opacity-35 blur-[110px]" />
    <div className="absolute -right-32 -top-16 hidden size-[640px] rounded-full bg-violet-glow/25 blur-3xl sm:block" />
  </div>
)
