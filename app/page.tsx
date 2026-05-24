import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { DesignWorksSection } from "@/components/portfolio/design-works-section";
import { ExpertiseSection } from "@/components/portfolio/expertise-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { Sidebar } from "@/components/portfolio/sidebar";
import { SpecializedSkillsSection } from "@/components/portfolio/specialized-skills-section";
import { TechStackSection } from "@/components/portfolio/tech-stack-section";

export default function Home() {
  return (
    <main className="relative px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-16">
            <HeroSection />
            <AboutSection />
            <ExpertiseSection />
            <SpecializedSkillsSection />
            <TechStackSection />
            <DesignWorksSection />
            <ProjectsSection />
            <ContactSection />
          </div>

          <div className="lg:pl-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
