import Link from "next/link";
import { SiteHeader } from "@/components/legacy/SiteHeader";
import { SiteFooter } from "@/components/legacy/SiteFooter";
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
      <SiteHeader />
      <div className="Classes" style={{ marginTop: "90px" }}>
        <h1>Our Classes</h1>
        <p>Programs for spinning, dance fitness, strength, HIIT, and personalized coaching in Juja.</p>
        <div className="cen">
          {classHighlights.map((item) => (
            <div className="Classe" key={item.title}>
              <img src="/img/cycling.png" alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="btn">
          Join a class
        </Link>
      </div>
      <SiteFooter />
    </>
  );
}
