import React from 'react';
import { RecruitmentTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Jobs } from '@/components/sections/Jobs';
import { Team } from '@/components/sections/Team';
import { Cta } from '@/components/sections/Cta';
import { Impact } from '@/components/sections/Impact';
import { Testimonials } from '@/components/sections/Testimonials';
import { Blogs } from '@/components/sections/Blogs';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: RecruitmentTemplateData = rawData;
  const sectionData = templateData?.categories?.Recruitment?.sections;
  if (!sectionData) return null;

  return (
    <main className="flex min-h-screen w-full min-w-0 max-w-full flex-col overflow-x-hidden bg-[var(--color-bg-main)]">
      <Hero data={sectionData.Hero?.variants?.RecruitmentHero1} />
      <AboutUs data={sectionData.AboutUs?.variants?.RecruitmentAboutUs1} />
      <Services data={sectionData.Services?.variants?.RecruitmentServices1} limit={6} />
      <WhyChooseUs data={sectionData.whyChooseUs?.variants?.RecruitmentWhyChooseUs1} />
      <Impact data={sectionData.Impact?.variants?.RecruitmentImpact1} />
      <Jobs data={sectionData.Jobs?.variants?.RecruitmentJobs1} limit={4} />
      <Team data={sectionData.Team?.variants?.RecruitmentTeam1} limit={4} />
      <Cta data={sectionData.Cta?.variants?.RecruitmentCta1} />
      <Testimonials data={sectionData.Testimonials?.variants?.RecruitmentTestimonials1} />
      <Blogs data={sectionData.Blogs?.variants?.RecruitmentBlogs1} limit={3} />
    </main>
  );
}
