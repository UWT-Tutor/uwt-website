import Introduction from "@/components/home/introduction";
import TopBanner from "@/components/home/top_banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <TopBanner />
      <Introduction />
    </div>
  );
}
