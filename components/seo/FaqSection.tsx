import type { FaqItem } from "../../lib/schemaBuilders";

type FaqSectionProps = {
  title?: string;
  faqs: FaqItem[];
};

export default function FaqSection({
  title = "Frequently asked questions",
  faqs,
}: FaqSectionProps) {
  return (
    <section id="faq-section" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
