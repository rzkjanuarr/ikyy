import React from "react";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/AboutSection"));
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </>
    </main>
  );
}
