import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import rawData from '@/data/templates.json';
import { RecruitmentTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TalentHire HR Consultancy",
  description: "Helping businesses hire, develop and retain the right talent.",
  icons: {
    icon: '/other/talenthire-logo.webp',
    shortcut: '/other/talenthire-logo.webp',
    apple: '/other/talenthire-logo.webp',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const templateData: RecruitmentTemplateData = rawData;
  const sectionData = templateData.categories.Recruitment.sections;
  const commonData = templateData.common;

  return (
    <html lang="en" className="w-full max-w-[100vw]">
      <body className={`${poppins.variable} w-full min-w-0 max-w-[100vw] break-words font-sans antialiased`}>
        <TopBar data={sectionData.topBar?.variants?.RecruitmentTopBar1} />
        <Header data={sectionData.Header?.variants?.RecruitmentHeader1} />
        {children}
        <Footer data={commonData.Footer} />
      </body>
    </html>
  );
}
