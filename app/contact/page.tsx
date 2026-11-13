import React from 'react';
import rawData from '@/data/templates.json';
import { RecruitmentTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactPage } from '@/components/sections/ContactPage';

export const dynamic = 'force-dynamic';

export default function ContactUsPage() {
  const templateData: RecruitmentTemplateData = rawData;
  const sectionData = templateData.categories.Recruitment.sections;

  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-[var(--color-bg-main)]">
      <Breadcrumb data={sectionData.Breadcrumb?.variants?.RecruitmentContactBreadcrumb1} />
      <ContactPage data={sectionData.ContactPage?.variants?.RecruitmentContactPage1} />
    </main>
  );
}
