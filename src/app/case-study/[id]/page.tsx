import { Navbar } from "@/components/navbar";
import { CaseStudy } from "@/components/case-study";

export default function CaseStudyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="w-full mt-16">
        <CaseStudy />
      </div>
    </main>
  );
}
