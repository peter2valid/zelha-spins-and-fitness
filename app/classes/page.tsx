import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
import { classHighlights } from "@/data/siteContent";

export const metadata = buildMetadata({
  title: "Classes",
  description:
    "Explore spinning, dance fitness, strength training, HIIT, personal training, and outdoor group sessions at Zelha in Juja.",
  path: "/classes"
});

export default function ClassesPage() {
  return (
    <>
      <Header />
      <div className="Classes" style={{ marginTop: "90px" }}>
        <h1>Classes & Programs</h1>
        <p>Structured classes in Juja — spinning, strength, HIIT, and dance fitness designed to deliver measurable progress.</p>
        <div className="cen">
          {classHighlights.map((item, index) => (
            <div className="Classe" key={item.title}>
              <img
                src={
                  index === 0
                    ? "/images/hero-cycling.jpg"
                    : index === 1
                    ? "/images/gallery-cardio.jpg"
                    : index === 2
                    ? "/images/service-strength.jpg"
                    : index === 3
                    ? "/images/gallery-cardio.jpg"
                    : index === 4
                    ? "/images/service-support.jpg"
                    : "/images/gallery-running.jpg"
                }
                alt={item.title}
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="btn">
          Book a class or visit
        </Link>
      </div>
      <Footer />
    </>
  );
}
