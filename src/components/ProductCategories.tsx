import Section from "./Section";

const products = [
  {
    title: "Uniforms",
    description:
      "Professional corporate and service uniforms for teams of any size.",
    moq: "200-300 units",
    leadTime: "4-6 weeks",
    customization: "Logo embroidery, screen printing, custom colors, size grading",
    icon: (
      <svg
        className="w-10 h-10 text-blue-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Scrubs",
    description:
      "Comfortable, durable medical scrubs for healthcare professionals.",
    moq: "250-350 units",
    leadTime: "4-6 weeks",
    customization: "Medical-grade fabrics, color options, logo placement, pocket styles",
    icon: (
      <svg
        className="w-10 h-10 text-blue-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Industrial Workwear",
    description:
      "Tough, safety-compliant apparel for factories and construction.",
    moq: "300-400 units",
    leadTime: "5-7 weeks",
    customization: "High-visibility options, reinforced seams, safety certifications, custom sizing",
    icon: (
      <svg
        className="w-10 h-10 text-blue-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Hoodies",
    description: "Premium hoodies and sweatshirts for casual and branded wear.",
    moq: "200-300 units",
    leadTime: "3-5 weeks",
    customization: "Fabric weight options, drawstring colors, zipper styles, embroidery or printing",
    icon: (
      <svg
        className="w-10 h-10 text-blue-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Denim / Jeans",
    description: "Classic and modern denim styles for any market segment.",
    moq: "300-400 units",
    leadTime: "5-7 weeks",
    customization: "Wash options, fit variations, hardware choices, distressing, custom labels",
    icon: (
      <svg
        className="w-10 h-10 text-blue-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "Custom Apparel",
    description:
      "Bespoke designs manufactured to your exact specifications.",
    moq: "200-300 units",
    leadTime: "4-8 weeks",
    customization: "Complete design flexibility, fabric selection, pattern development, full branding",
    icon: (
      <svg
        className="w-10 h-10 text-blue-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
  },
];

interface ProductCategoriesProps {
  hideHeader?: boolean;
}

export default function ProductCategories({ hideHeader = false }: ProductCategoriesProps) {
  return (
    <Section id="products" className="bg-slate-50">
      {!hideHeader && (
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Product Categories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From corporate uniforms to custom streetwear, we manufacture it all at
            scale.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-900/30 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <div className="mb-4 p-3 inline-block rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors duration-300">
              {product.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {product.title}
            </h3>
            <p className="text-slate-600 mb-4">{product.description}</p>
            
            {/* B2B Metadata */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">MOQ:</span>
                <span className="text-slate-700 font-medium">{product.moq}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Lead Time:</span>
                <span className="text-slate-700 font-medium">{product.leadTime}</span>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <span className="text-slate-500 flex-shrink-0">Customization:</span>
                <span className="text-slate-700 font-medium">{product.customization}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
