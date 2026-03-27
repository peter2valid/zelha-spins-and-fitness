import Image from "next/image";
import { galleryItems } from "@/data/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Zelha Gallery" description="A look at the energy, discipline, and community built inside and outside our gym." />
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article key={item.label} className="gallery-item">
              <Image
                src={item.image}
                alt={item.label}
                width={420}
                height={320}
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="gallery-item__label">{item.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
