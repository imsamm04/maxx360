import { IconFacebook, IconInstagram, IconX } from "@/assets/icons";

// Types
interface FooterLink {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterSectionProps {
  section: FooterSection;
}

interface FooterLinkProps {
  link: FooterLink;
  className?: string;
}

// Constants
const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "About",
    links: [
      { id: "about-us", label: "About Us", href: "#" },
      { id: "responsible-gaming", label: "Responsible Gaming", href: "#" },
      { id: "affiliate", label: "Affiliate", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { id: "faqs", label: "FAQs", href: "#" },
      { id: "contact", label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Regulations",
    links: [
      { id: "terms", label: "General Terms and Conditions", href: "#" },
      { id: "privacy", label: "Privacy Policy", href: "#" },
      { id: "aml-kyc", label: "AML & KYC Policy", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      {
        id: "facebook",
        label: "Facebook",
        href: "#",
        icon: <IconFacebook width={18} height={18} />,
      },
      {
        id: "twitter",
        label: "Twitter",
        href: "#",
        icon: <IconX width={18} height={18} />,
      },
      {
        id: "instagram",
        label: "Instagram",
        href: "#",
        icon: <IconInstagram width={18} height={18} />,
      },
    ],
  },
];

const COMPANY_INFO = {
  name: "ZorroBet",
  year: "2022",
  copyright: "All rights reserved",
};

// Sub-components

const FooterLink = ({ link, className = "" }: FooterLinkProps) => (
  <li>
    <a
      href={link.href}
      className={`text-casino-secondary hover:text-white transition-colors duration-200 ${className}`}
      aria-label={link.label}
    >
      {link.icon && <span className="mr-2">{link.icon}</span>}
      {link.label}
    </a>
  </li>
);

const FooterSection = ({ section }: FooterSectionProps) => (
  <div className="">
    <h3 className="text-white font-family-open-sans font-bold mb-6">
      {section.title}
    </h3>
    <ul className="flex flex-col gap-[22px]">
      {section.links.map((link) => (
        <FooterLink
          key={link.id}
          link={link}
          className={section.title === "Social" ? "flex items-center" : ""}
        />
      ))}
    </ul>
  </div>
);

const FooterMain = () => (
  <footer className="bg-[var(--color-background-secondary)] px-4 md:px-8">
    <div className="max-w-[1280px] mx-auto text-gray-300 py-8">
      <div className="flex justify-between flex-wrap gap-8 lg:gap-0">
        {FOOTER_SECTIONS.map((section) => (
          <FooterSection key={section.title} section={section} />
        ))}
      </div>
    </div>
  </footer>
);

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();
  const displayYear =
    currentYear > parseInt(COMPANY_INFO.year)
      ? `${COMPANY_INFO.year}-${currentYear}`
      : COMPANY_INFO.year;

  return (
    <div className="bg-[var(--color-background-tertiary)] text-center text-sm text-casino-secondary py-4 px-4">
      <p>
        Copyright ©{displayYear}, {COMPANY_INFO.name}. {COMPANY_INFO.copyright}
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <FooterMain />
      <FooterCopyright />
    </>
  );
};

export default Footer;
