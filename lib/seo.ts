import type { Metadata } from "next";

const baseTitle = "Zelha Spin & Fitness";
const baseDescription =
  "Zelha Spin & Fitness is a premium gym in Juja, Kenya, next to Equity Afya, offering spinning, dance fitness, strength training, HIIT, and personalized coaching.";

export function buildMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `https://zelhaspinfitness.co.ke${path}`;
  const pageDescription = description ?? baseDescription;

  return {
    title: `${title} | ${baseTitle}`,
    description: pageDescription,
    openGraph: {
      title: `${title} | ${baseTitle}`,
      description: pageDescription,
      url,
      siteName: baseTitle,
      locale: "en_KE",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${baseTitle}`,
      description: pageDescription
    },
    alternates: {
      canonical: url
    }
  };
}
