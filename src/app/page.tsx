import { PhoneFrame } from "@/components/os/phone-frame";
import { WebsiteLoader } from "@/components/ui/website-loader";

export default function Home() {
  return (
    <WebsiteLoader>
      <main className="min-h-screen bg-black overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black z-0" />
        <div className="relative z-10">
          <PhoneFrame />
        </div>
      </main>
    </WebsiteLoader>
  );
}
