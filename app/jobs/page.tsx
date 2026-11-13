import React from 'react';
import rawData from '@/data/templates.json';
import { JobsPageRouteProps, RecruitmentTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { JobPage } from '@/components/sections/JobPage';

export const dynamic = 'force-dynamic';

export default async function JobsPage({ searchParams }: JobsPageRouteProps) {
  const resolvedSearchParams = await searchParams;
  const templateData: RecruitmentTemplateData = rawData;
  const sectionData = templateData.categories.Recruitment.sections;

  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-[var(--color-bg-main)]">
      <Breadcrumb data={sectionData.Breadcrumb?.variants?.RecruitmentJobsBreadcrumb1} />
      <JobPage
        data={sectionData.JobPage?.variants?.RecruitmentJobPage1}
        jobsData={sectionData.Jobs?.variants?.RecruitmentJobs1}
        initialPositionId={resolvedSearchParams.position}
      />
    </main>
  );
}
