"use client";
import { pageview } from "@/lib/gtag";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAnalytics({
  GA_TRACKING_ID,
}: {
  GA_TRACKING_ID: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(GA_TRACKING_ID, url);
  }, [pathname, searchParams, GA_TRACKING_ID]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
}
