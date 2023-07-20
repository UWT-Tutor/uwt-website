import "./globals.css";
import { Raleway } from "next/font/google";
import { MainNav } from "@/components/main_nav";
import { routeConfig } from "@/config/route";
import GoogleAnalytics from "@/components/google_analytics";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "UWT - Your Most Trusted Writing Tutors",
  description: "For College and Graduate School Application Essays.",
  url: "https://uwt-website.vercel.app/",
  siteName: "UWT Website",
  canonical: "https://uwt-website.vercel.app/",
  openGraph: {
    title: "UWT - Your Most Trusted Writing Tutors",
    description: "For College and Graduate School Application Essays.",
    url: "https://uwt-website.vercel.app/",
    siteName: "UWT Website",
    images: [
      {
        url: "/images/ogp.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_TRACKING_ID = process.env.GA_TRACKING_ID || "";
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />
      <body className={raleway.className}>
        <MainNav items={routeConfig.mainNav} />
        <div className="pt-[5rem] bg-background">{children}</div>
      </body>
    </html>
  );
}
