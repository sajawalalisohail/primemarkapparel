import Section from "./Section";

const testimonials = [
  {
    quote:
      "PrimeMark delivered exactly what we needed for our hospital staff. The scrubs are comfortable, durable, and the turnaround was faster than expected.",
    name: "Sarah Mitchell",
    title: "Procurement Director",
    company: "Regional Medical Center",
  },
  {
    quote:
      "We've been working with PrimeMark for our restaurant chain uniforms. The quality is consistent across every batch, and their customization options are excellent.",
    name: "James Rodriguez",
    title: "Operations Manager",
    company: "Hospitality Group",
  },
  {
    quote:
      "Finding a reliable workwear supplier was challenging until we partnered with PrimeMark. Their safety-compliant industrial uniforms meet all our requirements.",
    name: "David Chen",
    title: "Supply Chain Manager",
    company: "Construction Services Co.",
  },
];

export default function Testimonials() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Trusted by businesses worldwide for quality and reliability.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
          >
            {/* Quote icon */}
            <svg
              className="w-8 h-8 text-blue-900/20 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-slate-700 mb-6 leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-900 font-medium">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 font-medium text-sm">
                  {testimonial.name}
                </p>
                <p className="text-slate-500 text-xs">
                  {testimonial.title}
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
