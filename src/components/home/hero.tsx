import Image from "next/image";
import { Header } from "@/components/layout/header";
import { OutlineButton } from "@/components/ui/button";
import { glass } from "@/components/ui/chip";
import { FoldText } from "@/components/ui/fold-text";

const meta = [
  { label: "Experiencia", value: "6 años" },
  { label: "Formación", value: "UNLP · Comunicación Visual" },
  { label: "Base", value: "Buenos Aires" },
  { label: "Foco", value: "UX/UI · Producto" },
];

export function Hero() {
  const introBlock = (
    <div className="flex flex-col gap-3">
      <div className="relative h-16 w-16 rounded-[var(--radius-lg)] bg-[var(--accent)]">
        <span className="absolute -top-[6px] left-[10px] font-[var(--font-inter)] text-[96px] leading-[96px] text-[var(--on-accent)]">“</span>
      </div>
      <div className="font-display text-[32px] font-light leading-[38px] tracking-[-1.4px] text-white/75 md:w-[609px] md:text-[40px] md:leading-[47px] md:tracking-[-1.75px]">
        <p>
          Hola! soy <span className="font-semibold text-[var(--accent-light)]">Neky,</span>{" "}
          <span className="font-sans font-semibold text-white/92">Product Designer especializada en UX/UI</span>{" "}
          que lleva productos de la estrategia al MVP.
        </p>
        <p className="font-sans font-light">Diseño con criterio de negocio y ejecución visual.</p>
      </div>
    </div>
  );

  const pill = (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.06] px-4 py-2 font-sans text-[13px] font-medium tracking-[2px]">
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--accent-light)]" />
      PRODUCT DESIGNER · UX/UI
    </span>
  );

  return (
    <section
      id="inicio"
      className="relative h-auto overflow-hidden lg:h-[980px]"
      style={{
        backgroundColor: "var(--color-bg-base)",
        backgroundImage:
          "radial-gradient(circle at 75% 30%, color-mix(in srgb, var(--accent-mid) 18%, transparent), transparent 45%), radial-gradient(circle at 0% 100%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 50%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 4%) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 4%) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage: "radial-gradient(ellipse at 50% 45%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 30%, transparent 75%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] bg-[linear-gradient(to_bottom,transparent,var(--color-bg-base))]" />
      <Header />

      {/* Mobile & tablet layout */}
      <div className="relative flex flex-col items-center px-5 pb-16 pt-[123px] text-center uppercase lg:hidden md:px-10">
        <div className="mb-6">{pill}</div>
        <h1 className="w-full font-display text-white md:hidden">
          <FoldText text={"Agustina\nSurraco"} splitBy="char" hinge="top" trigger="mount" fontSize={36} fontWeight={800} color="#ffffff" />
        </h1>
        <h1 className="hidden w-full font-display text-white md:block">
          <FoldText
            text="Agustina Surraco"
            splitBy="char"
            hinge="top"
            trigger="mount"
            fontSize={60}
            fontWeight={800}
            color="#ffffff"
            style={{ whiteSpace: "nowrap" }}
          />
        </h1>
        <p className="mt-2 w-full text-base normal-case leading-6 text-white/35">Agustina “Neky” Surraco</p>
        <div className="relative mt-10 h-[280px] w-[254px] shrink-0 md:h-[336px] md:w-[307px]">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-mid)] opacity-[0.3] blur-[120px]" />
          <div className="relative h-[272px] w-[246px] overflow-hidden rounded-[var(--radius-xl)] shadow-[0_40px_60px_rgb(0_0_0_/_50%)] md:h-[326px] md:w-[296px]">
            <Image src="/images/home/hero-portrait.png" alt="Retrato de Agustina Neky Surraco" width={296} height={326} className="h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(132.214deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,.3) 100%)" }} />
          </div>
        </div>
        <div className="mt-9 flex flex-col items-start text-left normal-case">{introBlock}</div>
        <div className="mt-9">
          <OutlineButton>Contactar</OutlineButton>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block">
        <div className="absolute left-1/2 top-[133px] -translate-x-1/2">{pill}</div>
        <div className="absolute left-1/2 top-[193px] flex -translate-x-1/2 flex-col items-center whitespace-nowrap uppercase">
          <p style={{ maskImage: "linear-gradient(to bottom, black, transparent 85%)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)" }} className="origin-center scale-y-[-1] whitespace-nowrap font-sans text-[83.599px] font-black leading-[71.059px] tracking-[-4.194px] text-white/12">Agustina Surraco</p>
          <h1 className="font-display text-white">
            <FoldText
              text="Agustina Surraco"
              splitBy="char"
              hinge="top"
              trigger="mount"
              fontSize={83.599}
              fontWeight={800}
              color="#ffffff"
              style={{ whiteSpace: "nowrap" }}
            />
          </h1>
        </div>
        <p className="absolute left-1/2 top-[353px] -translate-x-1/2 whitespace-nowrap text-center text-base leading-6 text-white/35">Agustina “Neky” Surraco</p>

        <div className="absolute left-1/2 top-[454px] flex w-[960px] -translate-x-1/2 items-start gap-7">
          <div className="relative h-[336px] w-[307.41px] shrink-0">
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-mid)] opacity-[0.3] blur-[120px]" />
            <div className="relative h-[325px] w-[294.845px] overflow-hidden rounded-[var(--radius-xl)] shadow-[0_40px_60px_rgb(0_0_0_/_50%)]">
              <Image src="/images/home/hero-portrait.png" alt="Retrato de Agustina Neky Surraco" width={295} height={325} className="h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(132.214deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,.3) 100%)" }} />
            </div>
          </div>
          <div className="flex flex-col items-start gap-9">
            {introBlock}
            <OutlineButton>Contactar</OutlineButton>
          </div>
        </div>
      </div>

      <div className="relative z-10 lg:absolute lg:inset-x-0 lg:bottom-0">
        <dl className={`${glass} mx-auto grid w-full max-w-[960px] grid-cols-2 gap-x-6 gap-y-4 rounded-t-[20px] border-b-0 px-6 py-5 md:grid-cols-4`}>
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-[11px] uppercase tracking-[2px] text-[var(--color-text-muted)]">{item.label}</dt>
              <dd className="mt-1 text-sm text-white/90">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
