import Section from "./Section";

export default function WhoWeAre() {
  return (
    <Section className="bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          Who We Are
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Primemark Apparel is a custom apparel manufacturer specializing in
          bulk and private-label production for fashion brands, uniform
          suppliers, and apparel printing companies.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          With over 20 years of hands-on manufacturing experience, our
          operations are built on proven production systems, skilled labor, and
          long-term industry knowledge. While our digital presence is new, our
          manufacturing foundation is well established.
        </p>
      </div>
    </Section>
  );
}
