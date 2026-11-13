import React from 'react';
import rawData from '@/data/templates.json';
import { RecruitmentTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Cta } from '@/components/sections/Cta';
import { Team } from '@/components/sections/Team';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const templateData: RecruitmentTemplateData = rawData;
  const sectionData = templateData.categories.Recruitment.sections;

  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-[var(--color-bg-main)]">
      <Breadcrumb data={sectionData.Breadcrumb?.variants?.RecruitmentAboutBreadcrumb1} />
      <AboutUs data={sectionData.AboutUs?.variants?.RecruitmentAboutUsPage1} />
      <WhyChooseUs data={sectionData.whyChooseUs?.variants?.RecruitmentWhyChooseUs1} />
      <Cta data={sectionData.Cta?.variants?.RecruitmentCta1} />
      <Team data={sectionData.Team?.variants?.RecruitmentTeam1} limit={4} />
    </main>
  );
}
