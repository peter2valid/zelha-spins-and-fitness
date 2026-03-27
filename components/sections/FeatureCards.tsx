import Image from "next/image";
import { whyChooseUs } from "@/data/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeatureCards() {
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading
          title="Why People Choose Zelha"
          description="Modern equipment, passionate trainers, and a community that keeps you consistent."
        />
        <div className="feature-grid">
          {whyChooseUs.map((item, index) => (
            <article className="feature-card" key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                width={420}
                height={320}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
