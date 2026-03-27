import { HomePageClient } from "@/components/legacy/HomePageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gym in Juja",
  description:
    "Train at Zelha Spin & Fitness, a high-energy gym in Juja near Equity Afya with spinning, strength, cardio, and dance fitness classes.",
  path: "/"
});

export default function HomePage() {
  return <HomePageClient />;
}
