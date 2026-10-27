import { Fragment } from "react";

export function CsMarquee({ words }: { words: string[] }) {
  const sequence = (
    <span className="flex shrink-0 items-center">
      {words.map((word) => (
        <Fragment key={word}>
          <span className="px-6">{word}</span>
          <span className="text-[var(--cs-accent-light)]">✦</span>
        </Fragment>
      ))}
    </span>
  );
  return (
    <div className="mt-20 flex h-[91px] items-center overflow-hidden bg-[var(--cs-accent)] md:mt-[120px]">
      <p className="sr-only">{words.join(", ")}</p>
      <div aria-hidden="true" className="cs-marquee-track flex w-max whitespace-nowrap font-display text-[40px] font-extrabold text-white">
        {[0, 1, 2, 3].map((i) => <Fragment key={i}>{sequence}</Fragment>)}
      </div>
    </div>
  );
}
