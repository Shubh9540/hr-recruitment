import React from 'react';
import rawData from '@/data/templates.json';
import { RecruitmentTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetail } from '@/components/sections/BlogDetail';

export const dynamic = 'force-dynamic';

export default function BlogDetailPage() {
  const templateData: RecruitmentTemplateData = rawData;
  const sectionData = templateData.categories.Recruitment.sections;

  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-[var(--color-bg-main)]">
      <Breadcrumb data={sectionData.Breadcrumb?.variants?.RecruitmentBlogDetailBreadcrumb1} />
      <BlogDetail
        data={sectionData.BlogDetail?.variants?.RecruitmentBlogDetail1}
        blogsData={sectionData.Blogs?.variants?.RecruitmentBlogs1}
      />
    </main>
  );
}
