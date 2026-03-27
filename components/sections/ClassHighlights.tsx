import { Bike, Flame, HeartPulse, Mountain, UserRound, Dumbbell } from "lucide-react";
import { classHighlights } from "@/data/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Bike, Flame, Dumbbell, HeartPulse, UserRound, Mountain];

export function ClassHighlights() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Our Classes"
          description="Train your way with cycling, dance, strength, cardio, coaching, and outdoor fitness adventures."
        />
        <div className="class-grid">
          {classHighlights.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article className="class-card" key={item.title}>
                <span className="class-icon">
                  <Icon size={22} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
