import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading centered eyebrow="Reviews" title="What Our Customers Say" id="testimonials-heading" />

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={`${item.author}-${item.quote.slice(0, 24)}`}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <cite>{item.author}</cite>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
