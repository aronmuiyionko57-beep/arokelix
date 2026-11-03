import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_EMAIL, SITE_PHONE, SITE_DESCRIPTION } from "./lib/site";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollProgress from "./components/ScrollProgress";
import AnnouncementBar from "./components/AnnouncementBar";

const TITLE = "AROKELIX | Technology, Software & Digital Solutions";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AROKELIX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  description: SITE_DESCRIPTION,
  areaServed: "Worldwide",
  founder: { "@type": "Person", name: "Aron Muiyionko" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
<AnnouncementBar />
{children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}