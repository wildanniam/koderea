import Image from "next/image";

export function AssuranceBridge() {
  return (
    <section
      id="assurance-layer"
      aria-labelledby="assurance-layer-title"
      className="scroll-mt-20 border-b border-slate-100 bg-paper py-24 md:px-10 md:py-[100px]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <header className="px-6 text-center md:px-0">
          <h2
            id="assurance-layer-title"
            className="text-[clamp(2.5rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-carbon"
          >
            One fixed layer. Continuous confidence.
          </h2>
          <p className="mx-auto mt-5 max-w-[724px] text-lg font-normal leading-[1.3] text-[#515151] md:text-xl">
            Applies independent AI assurance across regulated and high-stakes sectors,
            adapting evaluation to local data, domain risks, and institutional requirements.
          </p>
        </header>

        <div className="mt-12 md:mt-[60px]">
          <p className="px-6 text-sm font-medium text-slate-500 lg:hidden">
            Swipe to explore the full assurance layer.
          </p>
          <div
            tabIndex={0}
            aria-label="Scrollable diagram of Koderea's independent assurance layer"
            className="mt-4 overflow-x-auto overscroll-x-contain px-6 pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700 lg:mt-0 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            <figure className="w-[920px] lg:w-full">
              <Image
                src="/bridging/koderea-assurance-layer.svg"
                alt="Institution data and AI vendor models flow through Koderea's independent assurance layer to produce validated outputs and an audit-ready assurance report."
                width={1200}
                height={575}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) calc(100vw - 80px), 920px"
                className="block h-auto w-full"
              />
              <figcaption className="sr-only">
                The assurance layer evaluates institution data and vendor AI models through
                explainability, monitoring, risk controls, policy standards, and fairness checks.
                It produces validation results, findings, evidence, recommendations, compliance,
                and readiness outputs.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
