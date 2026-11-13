import React from 'react';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { RecruitmentTemplateData, TeamDetailPageProps } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TeamDetail } from '@/components/sections/TeamDetail';

const templateData: RecruitmentTemplateData = rawData;
const sectionData = templateData.categories.Recruitment.sections;
const teamData = sectionData.Team?.variants?.RecruitmentTeam1;

export function generateStaticParams() {
  return teamData?.members.map((member) => ({ id: member.id })) ?? [];
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  const { id } = await params;
  const member = teamData?.members.find((teamMember) => teamMember.id === id);

  if (!member) notFound();

  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-[var(--color-bg-main)]">
      <Breadcrumb data={sectionData.Breadcrumb?.variants?.RecruitmentTeamDetailBreadcrumb1} />
      <TeamDetail data={sectionData.TeamDetail?.variants?.RecruitmentTeamDetail1} member={member} />
    </main>
  );
}
