import Image from "next/image";
import { Header } from "@/components/layout/header";
import { OutlineButton } from "@/components/ui/button";
import { TechText } from "@/components/ui/tech-text";

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
    <section id="inicio" className="relative h-auto bg-[var(--color-bg-base)] lg:h-[856px]">
      <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden lg:bottom-auto lg:h-[673px]">
        <Image src="/images/home/hero-bg.jpg" alt="" fill priority sizes="(max-width: 1023px) 100vw, 1584px" className="object-cover object-bottom opacity-75" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0A0A0A_0%,rgba(10,10,10,.8)_50%,rgba(10,10,10,.4)_100%)]" />
        <div className="absolute inset-0 bg-[#FF57AB] mix-blend-color" />
      </div>
      <Header />

      <h1 className="sr-only">Agustina Surraco</h1>

      {/* Mobile & tablet layout */}
      <div className="relative flex flex-col items-center px-5 pb-16 pt-[123px] text-center uppercase lg:hidden md:px-10">
        <div aria-hidden="true" className="flex w-full flex-col items-center gap-1 md:hidden">
          <div className="h-[72px] w-full font-display">
            <TechText text="AGUSTINA" fontSize={60} color="#ffffff" accentColor="#FF57AB" reveal="letter" />
          </div>
          <div className="h-[72px] w-full font-display">
            <TechText text="SURRACO" fontSize={60} color="#ffffff" accentColor="#FF57AB" reveal="letter" />
          </div>
        </div>
        <div aria-hidden="true" className="hidden h-24 w-full font-display md:block">
          <TechText text="AGUSTINA SURRACO" fontSize={80} color="#ffffff" accentColor="#FF57AB" reveal="letter" />
        </div>
        <p className="mt-2 w-full text-base normal-case leading-6 text-white/35">Agustina “Neky” Surraco</p>
        <div className="relative mt-10 h-[280px] w-[254px] shrink-0 md:h-[336px] md:w-[307px]">
          <div className="absolute left-[8px] top-[9px] h-[271px] w-[246px] border-2 border-white md:h-[325px] md:w-[295px]" />
          <div className="relative h-[272px] w-[246px] overflow-hidden md:h-[326px] md:w-[296px]">
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
        <div className="absolute left-1/2 top-[193px] flex -translate-x-1/2 flex-col items-center uppercase">
          <p className="origin-center scale-y-[-1] whitespace-nowrap font-sans text-[83.599px] font-black leading-[71.059px] tracking-[-4.194px] text-white/12">Agustina Surraco</p>
          <div aria-hidden="true" className="h-[104px] w-[min(1100px,92vw)] font-display">
            <TechText text="AGUSTINA SURRACO" fontSize={84} color="#ffffff" accentColor="#FF57AB" reveal="letter" />
          </div>
        </div>
        <p className="absolute left-[calc(50%-298px)] top-[386px] text-base leading-6 text-white/35">Agustina “Neky” Surraco</p>

        <div className="absolute left-1/2 top-[487px] flex w-[960px] -translate-x-1/2 items-start gap-7">
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
