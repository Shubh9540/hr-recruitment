import React from 'react';
import rawData from '@/data/templates.json';
import { RecruitmentTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Team } from '@/components/sections/Team';

export const dynamic = 'force-dynamic';

export default function TeamPage() {
  const templateData: RecruitmentTemplateData = rawData;
  const sectionData = templateData.categories.Recruitment.sections;

  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-[var(--color-bg-main)]">
      <Breadcrumb data={sectionData.Breadcrumb?.variants?.RecruitmentTeamBreadcrumb1} />
      <Team data={sectionData.Team?.variants?.RecruitmentTeam1} showButton={false} />
    </main>
  );
}
