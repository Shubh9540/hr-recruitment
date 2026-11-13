import React from 'react';
import rawData from '@/data/templates.json';
import { RecruitmentTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetail } from '@/components/sections/ServiceDetail';

export const dynamic = 'force-dynamic';

export default function ServiceDetailsPage() {
  const templateData: RecruitmentTemplateData = rawData;
  const sectionData = templateData.categories.Recruitment.sections;

  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-[var(--color-bg-main)]">
      <Breadcrumb data={sectionData.Breadcrumb?.variants?.RecruitmentServiceDetailBreadcrumb1} />
      <ServiceDetail
        data={sectionData.ServiceDetail?.variants?.RecruitmentServiceDetail1}
        services={sectionData.Services?.variants?.RecruitmentServices1?.services}
      />
    </main>
  );
}
