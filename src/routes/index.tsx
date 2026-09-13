import { createFileRoute } from "@tanstack/react-router";
import { CtaTestimonials } from "@/components/sections/cta-testimonials";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { TrustedBy } from "@/components/sections/trusted-by";
import { WhatIBuild } from "@/components/sections/what-i-build";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeaturedProjects />
      <WhatIBuild />
      <Process />
      <CtaTestimonials />
    </>
  );
}
