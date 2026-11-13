// ---------------------------------------------------------------------------
// Common: TopBar, Header, Footer
// ---------------------------------------------------------------------------

export interface TopBarSocialItem {
  id: string;
  icon: string;
  url: string;
  label: string;
}

export interface TopBarData {
  phone: string;
  phoneLabel?: string;
  email: string;
  emailLabel?: string;
  address: string;
  followUsText?: string;
  socialLinks: TopBarSocialItem[];
}

export interface TopBarProps {
  data?: TopBarData;
}

export interface NavLinkItem {
  id: string;
  label: string;
  url: string;
}

export interface ContactButtonItem {
  text: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: NavLinkItem[];
  contactButton: ContactButtonItem;
  openMenuLabel?: string;
  closeMenuLabel?: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface FooterSocialItem {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface FooterLinkItem {
  id: string;
  label: string;
  url: string;
}

export interface FooterContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  quickLinksTitle: string;
  servicesTitle: string;
  contactTitle: string;
  followUsTitle: string;
  socialLinks: FooterSocialItem[];
  quickLinks: FooterLinkItem[];
  servicesLinks: FooterLinkItem[];
  contactInfo: FooterContactInfo;
}

export interface FooterProps {
  data?: FooterData;
}

export interface BreadcrumbItem {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  ariaLabel: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  paths: BreadcrumbItem[];
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
}

// ---------------------------------------------------------------------------
// Homepage Section 1: Hero
// ---------------------------------------------------------------------------

export interface HeroData {
  eyebrow: string;
  titleStart: string;
  highlightedTitle: string;
  titleEnd?: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  buttonText: string;
  buttonUrl: string;
}

export interface HeroProps {
  data?: HeroData;
}

// ---------------------------------------------------------------------------
// Homepage Section 2: About Us
// ---------------------------------------------------------------------------

export interface AboutFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  title2: string;
  descriptions: string[];
  imageMain: string;
  imageMainAlt: string;
  button?: ContactButtonItem;
  features: AboutFeatureItem[];
}

export interface AboutUsProps {
  data?: AboutUsData;
}

// ---------------------------------------------------------------------------
// Homepage Section 3: Services
// ---------------------------------------------------------------------------

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  highlightedTitle?: string;
  title2?: string;
  title3?: string;
  description: string;
  linkText: string;
  buttonText: string;
  buttonUrl: string;
  homepageLimit: number;
  services: ServiceItem[];
}

export interface ServiceCardProps {
  service: ServiceItem;
  linkText: string;
}

export interface ServicesProps {
  data?: ServicesData;
  limit?: number;
  showButton?: boolean;
}

export interface ServiceDetailContactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
  url: string;
}

export interface ServiceDetailKeyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailApproachData {
  title: string;
  descriptions: string[];
  image: string;
  imageAlt: string;
}

export interface ServiceDetailData {
  sidebarTitle: string;
  activeServiceId: string;
  helpTitle: string;
  helpDescription: string;
  helpImage: string;
  helpImageAlt: string;
  contactItems: ServiceDetailContactItem[];
  eyebrow: string;
  titleStart: string;
  highlightedTitle: string;
  descriptions: string[];
  mainImage: string;
  mainImageAlt: string;
  approach: ServiceDetailApproachData;
  keyServicesTitle: string;
  keyServices: ServiceDetailKeyItem[];
}

export interface ServiceDetailProps {
  data?: ServiceDetailData;
  services?: ServiceItem[];
}

// ---------------------------------------------------------------------------
// Homepage Section 4: Why Choose Us (Solution)
// ---------------------------------------------------------------------------

export interface WhyChooseUsFeatureItem {
  id: string;
  number?: string;
  icon: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  highlightedTitle?: string;
  title2?: string;
  title3?: string;
  description: string;
  imageMain: string;
  imageAlt: string;
  features: WhyChooseUsFeatureItem[];
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

// ---------------------------------------------------------------------------
// Homepage Section 5: Jobs
// ---------------------------------------------------------------------------

export interface JobItem {
  id: string;
  icon: string;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  description: string;
  url: string;
}

export interface JobsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  applyText: string;
  homepageLimit: number;
  jobs: JobItem[];
}

export interface JobsProps {
  data?: JobsData;
  limit?: number;
}

export interface JobApplicationFormData {
  title: string;
  description: string;
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  positionLabel: string;
  positionPlaceholder: string;
  resumeLabel: string;
  chooseFileText: string;
  noFileText: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  successMessage: string;
}

export interface JobPageData {
  form: JobApplicationFormData;
}

export interface JobPageProps {
  data?: JobPageData;
  jobsData?: JobsData;
  initialPositionId?: string;
}

export interface JobsPageRouteProps {
  searchParams: Promise<{ position?: string }>;
}

// ---------------------------------------------------------------------------
// Homepage Section 6: Team
// ---------------------------------------------------------------------------

export interface TeamSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  detailUrl: string;
  socialLinks: TeamSocialLink[];
}

export interface TeamData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  homepageLimit: number;
  members: TeamMember[];
}

export interface TeamProps {
  data?: TeamData;
  limit?: number;
  showButton?: boolean;
}

export interface TeamDetailExpertiseItem {
  id: string;
  text: string;
}

export interface TeamDetailData {
  subtitle: string;
  firstDescriptionTemplate: string;
  secondDescriptionTemplate: string;
  experienceTitle: string;
  experienceValue: string;
  experienceSuffix: string;
  expertiseTitle: string;
  expertise: TeamDetailExpertiseItem[];
  contactTitle: string;
  phone: string;
  phoneUrl: string;
  email: string;
  emailUrl: string;
  address: string;
  socialLinks: TeamSocialLink[];
}

export interface TeamDetailProps {
  data?: TeamDetailData;
  member?: TeamMember;
}

export interface TeamDetailPageProps {
  params: Promise<{ id: string }>;
}

// ---------------------------------------------------------------------------
// Homepage Section 7: CTA
// ---------------------------------------------------------------------------

export interface CtaData {
  icon: string;
  titleStart: string;
  highlightedTitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  backgroundImage: string;
  backgroundImageAlt: string;
}

export interface CtaProps {
  data?: CtaData;
}

// ---------------------------------------------------------------------------
// Homepage Section 8: Impact (Stats)
// ---------------------------------------------------------------------------

export interface ImpactStatItem {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface ImpactData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  stats: ImpactStatItem[];
}

export interface ImpactProps {
  data?: ImpactData;
}

export interface ImpactCounterProps {
  value: string;
  start: boolean;
}

// ---------------------------------------------------------------------------
// Homepage Section 7: Testimonials
// ---------------------------------------------------------------------------

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  title2?: string;
  description: string;
  videoImage?: string;
  videoImageAlt?: string;
  slideLabel: string;
  previousLabel: string;
  nextLabel: string;
  autoplayDelay: number;
  testimonials: TestimonialItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

// ---------------------------------------------------------------------------
// Homepage Section 8: Blogs
// ---------------------------------------------------------------------------

export interface BlogItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  date: string;
  url: string;
}

export interface BlogButton {
  text: string;
  url: string;
}

export interface BlogsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  readMoreText: string;
  button: BlogButton;
  homepageLimit: number;
  pagination: {
    previousLabel: string;
    nextLabel: string;
    pageLabel: string;
  };
  blogs: BlogItem[];
}

export interface BlogCardProps {
  blog: BlogItem;
  readMoreText: string;
}

export interface BlogsProps {
  data?: BlogsData;
  limit?: number;
  itemsPerPage?: number;
  showButton?: boolean;
  showPagination?: boolean;
}

export interface BlogDetailQuote {
  text: string;
  author: string;
}

export interface BlogDetailGalleryImage {
  id: string;
  image: string;
  imageAlt: string;
}

export interface BlogDetailData {
  authorLabel: string;
  titleStart: string;
  highlightedTitle: string;
  paragraphs: string[];
  quote: BlogDetailQuote;
  galleryImages: BlogDetailGalleryImage[];
  recentPostsTitle: string;
}

export interface BlogDetailProps {
  data?: BlogDetailData;
  blogsData?: BlogsData;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  value: string;
  url?: string;
}

export interface ContactCountryOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactFormData {
  subtitle: string;
  titleStart: string;
  highlightedTitle: string;
  description: string;
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  countryLabel: string;
  countryPlaceholder: string;
  countries: ContactCountryOption[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  successMessage: string;
}

export interface ContactPageData {
  contactItems: ContactInfoItem[];
  image: string;
  imageAlt: string;
  form: ContactFormData;
  mapTitle: string;
  mapUrl: string;
}

export interface ContactPageProps {
  data?: ContactPageData;
}

export interface QuoteFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface QuoteFormData {
  subtitle: string;
  titleStart: string;
  highlightedTitle: string;
  description: string;
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  requirementsLabel: string;
  requirementsPlaceholder: string;
  submitText: string;
  successMessage: string;
}

export interface QuotePageData {
  image: string;
  imageAlt: string;
  overlaySubtitle: string;
  overlayTitleStart: string;
  overlayHighlightedTitle: string;
  overlayDescription: string;
  features: QuoteFeatureItem[];
  form: QuoteFormData;
}

export interface QuotePageProps {
  data?: QuotePageData;
  servicesData?: ServicesData;
}

// ---------------------------------------------------------------------------
// Root Data Structure: RecruitmentTemplateData
// ---------------------------------------------------------------------------

export interface RecruitmentTemplateData {
  common: {
    Footer?: FooterData;
  };
  categories: {
    Recruitment: {
      sections: {
        topBar?: { variants?: { RecruitmentTopBar1?: TopBarData } };
        Breadcrumb?: { variants?: Record<string, BreadcrumbData> };
        Header?: { variants?: { RecruitmentHeader1?: HeaderData } };
        Hero?: { variants?: { RecruitmentHero1?: HeroData } };
        AboutUs?: {
          variants?: {
            RecruitmentAboutUs1?: AboutUsData;
            RecruitmentAboutUsPage1?: AboutUsData;
          };
        };
        Services?: { variants?: { RecruitmentServices1?: ServicesData } };
        ServiceDetail?: { variants?: { RecruitmentServiceDetail1?: ServiceDetailData } };
        whyChooseUs?: { variants?: { RecruitmentWhyChooseUs1?: WhyChooseUsData } };
        Jobs?: { variants?: { RecruitmentJobs1?: JobsData } };
        JobPage?: { variants?: { RecruitmentJobPage1?: JobPageData } };
        Team?: { variants?: { RecruitmentTeam1?: TeamData } };
        TeamDetail?: { variants?: { RecruitmentTeamDetail1?: TeamDetailData } };
        Cta?: { variants?: { RecruitmentCta1?: CtaData } };
        Impact?: { variants?: { RecruitmentImpact1?: ImpactData } };
        Testimonials?: { variants?: { RecruitmentTestimonials1?: TestimonialsData } };
        Blogs?: { variants?: { RecruitmentBlogs1?: BlogsData } };
        BlogDetail?: { variants?: { RecruitmentBlogDetail1?: BlogDetailData } };
        ContactPage?: { variants?: { RecruitmentContactPage1?: ContactPageData } };
        QuotePage?: { variants?: { RecruitmentQuotePage1?: QuotePageData } };
      };
    };
  };
  pages: Record<string, {
    components: {
      id: string;
      key: string;
      component: string;
    }[];
  }>;
}
