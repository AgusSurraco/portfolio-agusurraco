import Image from "next/image";
import { Header } from "@/components/layout/header";
import { OutlineButton } from "@/components/ui/button";

export function Hero() {
  const introBlock = (
    <div className="flex flex-col gap-3">
      <div className="relative h-16 w-16 bg-[#FF57AB]">
        <span className="absolute -top-[6px] left-[10px] font-[var(--font-inter)] text-[96px] leading-[96px] text-[#0A0A0A]">“</span>
      </div>
      <div className="font-display text-[32px] font-light leading-[38px] tracking-[-1.4px] text-white/75 md:w-[609px] md:text-[40px] md:leading-[47px] md:tracking-[-1.75px]">
        <p>
          Hola! soy <span className="font-semibold text-[#FF57AB]">Neky,</span>{" "}
          <span className="font-sans font-semibold text-white/92">Product Designer especializada en UX/UI</span>{" "}
          que lleva productos de la estrategia al MVP.
        </p>
        <p className="font-sans font-light">6 años de experiencia diseñando con criterio de negocio y ejecución visual.</p>
      </div>
      <p className="font-sans text-lg font-light leading-[27px] tracking-[-.4395px] text-white/60 md:w-[584px]">Graduada en la UNLP · Buenos Aires</p>
    </div>
  );

  return (
    <section id="inicio" className="relative h-auto bg-[var(--color-bg-base)] md:h-[856px]">
      <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden md:bottom-auto md:h-[673px]">
        <Image src="/images/home/hero-bg.jpg" alt="" fill priority sizes="(max-width: 767px) 100vw, 1584px" className="object-cover object-bottom opacity-75" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0A0A0A_0%,rgba(10,10,10,.8)_50%,rgba(10,10,10,.4)_100%)]" />
        <div className="absolute inset-0 bg-[#FF57AB] mix-blend-color" />
      </div>
      <Header />

      {/* Mobile layout */}
      <div className="relative flex flex-col items-center px-5 pb-16 pt-[123px] text-center uppercase md:hidden">
        <h1 className="w-full font-display text-4xl font-extrabold leading-tight tracking-[-2px] text-white">Neky Surraco</h1>
        <p className="mt-2 w-full text-base normal-case leading-6 text-white/35">Agustina “Neky” Surraco</p>
        <div className="relative mt-10 h-[280px] w-[254px] shrink-0">
          <div className="absolute left-[8px] top-[9px] h-[271px] w-[246px] border-2 border-white" />
          <div className="relative h-[272px] w-[246px] overflow-hidden">
            <Image src="/images/home/hero-portrait.png" alt="Retrato de Agustina Neky Surraco" width={246} height={272} className="h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(132.214deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,.3) 100%)" }} />
          </div>
        </div>
        <div className="mt-9 flex flex-col items-start text-left normal-case">{introBlock}</div>
        <div className="mt-9">
          <OutlineButton>Contactar</OutlineButton>
        </div>
      </div>

      {/* Desktop layout (unchanged) */}
      <div className="hidden md:block">
        <div className="absolute left-1/2 top-[193px] flex -translate-x-1/2 flex-col items-center uppercase">
          <p className="origin-center scale-y-[-1] font-sans text-[83.599px] font-black leading-[71.059px] tracking-[-4.194px] text-white/12">Neky Surraco</p>
          <h1 className="font-display text-[83.599px] font-extrabold leading-[71.059px] tracking-[-4.194px] text-white">Neky Surraco</h1>
        </div>
        <p className="absolute left-[calc(50%-298px)] top-[353px] text-base leading-6 text-white/35">Agustina “Neky” Surraco</p>

        <div className="absolute left-1/2 top-[454px] flex w-[960px] -translate-x-1/2 items-start gap-7">
          <div className="relative h-[336px] w-[307.41px] shrink-0">
            <div className="absolute left-[10.05px] top-[10.89px] h-[324.162px] w-[294.845px] border-2 border-white" />
            <div className="relative h-[325px] w-[294.845px] overflow-hidden">
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
    </section>
  );
}
