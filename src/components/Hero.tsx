"use client";

export default function Hero() {
  const scrollToRFQ = (prefillSamples: boolean = false) => {
    const rfqSection = document.querySelector("#rfq");
    if (rfqSection) {
      rfqSection.scrollIntoView({ behavior: "smooth" });
      if (prefillSamples) {
        // Give time for scroll, then set dropdown to Samples
        setTimeout(() => {
          const productSelect = document.querySelector(
            "#productType"
          ) as HTMLSelectElement;
          if (productSelect) {
            productSelect.value = "Samples";
            productSelect.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }, 500);
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-zinc-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Premium bulk apparel manufacturing —{" "}
              <span className="text-amber-400">made in Pakistan</span>, supplied
              at scale.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl">
              Uniforms, scrubs, industrial workwear, hoodies, denim, and custom
              apparel. Top-tier quality, competitive bulk pricing, and reliable
              delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToRFQ(false)}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-amber-500 text-zinc-950 rounded-lg hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                Request a Quote
              </button>
              <button
                onClick={() => scrollToRFQ(true)}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-transparent text-amber-400 border border-amber-400 rounded-lg hover:bg-amber-400 hover:text-zinc-950 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                Get Samples
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 flex items-center justify-center overflow-hidden">
              {/* Abstract pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <p className="text-zinc-400 text-sm">
                  Bulk Manufacturing Partner
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                  <span className="text-zinc-300 text-xs">
                    Ready to fulfill your order
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
