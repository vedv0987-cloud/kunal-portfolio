import { createFileRoute } from "@tanstack/react-router";
import { CtaTestimonials } from "@/components/sections/cta-testimonials";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { WhatIDo } from "@/components/sections/what-i-do";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <FeaturedProjects />
      <Process />
      <CtaTestimonials />
    </>
  );
}
