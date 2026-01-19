import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
              Premium bulk apparel manufacturing - {" "}
              <span className="text-amber-400">made in Pakistan</span>, supplied
              at scale.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl">
              Uniforms, scrubs, industrial workwear, hoodies, denim, and custom
              apparel. Top-tier quality, competitive bulk pricing, and reliable
              delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-amber-500 text-zinc-950 rounded-lg hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                Request a Quote
              </Link>
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-transparent text-amber-400 border border-amber-400 rounded-lg hover:bg-amber-400 hover:text-zinc-950 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                Get Samples
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 border border-zinc-800 overflow-hidden">
              <Image
                src="/branding/home1.jpg"
                alt="PrimeMark Apparel - Bulk Manufacturing Partner"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
