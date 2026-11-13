import React from 'react';
import rawData from '@/data/templates.json';
import { RecruitmentTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Blogs } from '@/components/sections/Blogs';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  const templateData: RecruitmentTemplateData = rawData;
  const sectionData = templateData.categories.Recruitment.sections;

  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-[var(--color-bg-main)]">
      <Breadcrumb data={sectionData.Breadcrumb?.variants?.RecruitmentBlogBreadcrumb1} />
      <Blogs
        data={sectionData.Blogs?.variants?.RecruitmentBlogs1}
        itemsPerPage={9}
        showButton={false}
        showPagination
      />
    </main>
  );
}
