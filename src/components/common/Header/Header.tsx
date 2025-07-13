import {
  IconChip,
  IconDice,
  IconGame,
  IconLive,
  IconPromotion,
  IconSport,
} from "@/assets/icons";
import IconChevronDown from "@/assets/icons/IconChevronDown";
import { Button } from "@/components/ui";
import { useState, useCallback } from "react";

// Types
interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{
    width: number;
    height: number;
    className?: string;
  }>;
  isSpecial?: boolean;
}

// Constants
const MENU_ITEMS: MenuItem[] = [
  { id: "Sport", label: "Sport", icon: IconSport },
  { id: "Live", label: "Live", icon: IconLive },
  { id: "Casino", label: "Casino", icon: IconDice },
  { id: "Promotion", label: "Promotion", icon: IconPromotion, isSpecial: true },
  { id: "Live Casino", label: "Live Casino", icon: IconChip },
  { id: "Virtual Games", label: "Virtual Games", icon: IconGame },
];

// Sub-components
const Logo = () => (
  <div className="flex">
    <span className="text-[var(--color-text-brand)] font-semibold uppercase text-sm leading-6">
      Max
    </span>
    <span className="text-white font-semibold uppercase text-sm leading-6">
      Bet360
    </span>
  </div>
);

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
    />
  </svg>
);

interface NavigationItemProps {
  item: MenuItem;
  isActive: boolean;
  onClick: (id: string) => void;
  isMobile?: boolean;
}

const NavigationItem = ({
  item,
  isActive,
  onClick,
  isMobile = false,
}: NavigationItemProps) => {
  const { id, label, icon: Icon, isSpecial } = item;

  const baseClasses = isMobile
    ? "flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
    : "link";

  const activeClasses = !isMobile && isActive ? "link-active" : "";
  const specialClasses = isSpecial
    ? isMobile
      ? "text-[var(--color-warning-500"
      : "flex items-center gap-2 px-4 transition-colors text-[var(--color-warning-500)]"
    : isMobile
    ? "text-text-muted"
    : "";

  const combinedClasses = isMobile
    ? baseClasses
    : `${baseClasses} ${activeClasses} ${specialClasses}`.trim();

  return (
    <li className={isMobile ? specialClasses : "list-group-item"}>
      <a className={combinedClasses} onClick={() => onClick(id)}>
        <Icon width={20} height={20} className="inline-block" />
        <span className="text-sm">{label}</span>
      </a>
    </li>
  );
};

const LanguageButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  const baseClasses =
    "text-white rounded-lg transition-colors duration-200 font-semibold gap-2 flex items-center";
  const mobileClasses = isMobile
    ? "w-full py-3 px-4 justify-center hover:bg-gray-800"
    : "pl-4 py-2";

  return (
    <button className={`${baseClasses} ${mobileClasses}`}>
      <span className="text-sm">EN</span>
      <IconChevronDown width={24} height={24} className="inline-block" />
    </button>
  );
};

const AuthButtons = ({ isMobile = false }: { isMobile?: boolean }) => {
  const buttonBaseClasses =
    "text-sm font-family-open-sans leading-6 rounded transition-colors duration-200 font-semibold cursor-pointer";
  const mobileClasses = isMobile ? "w-full py-3 px-4" : "h-[2.5rem] px-8 py-2";
  const hoverClasses = isMobile ? "hover:bg-gray-800" : "";

  return (
    <>
      <Button
        size="default"
        variant="outline"
        className={`${buttonBaseClasses} ${mobileClasses} border border-white text-white ${hoverClasses}`}
      >
        Login
      </Button>
      <Button size="default" className={`${mobileClasses} btn-primary px-8 py-2 rounded`}>
        Sign up
      </Button>
    </>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("Sport");

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleMenuItemClick = useCallback(
    (itemId: string) => {
      setActiveItem(itemId);
      if (isMenuOpen) {
        closeMenu();
      }
    },
    [isMenuOpen, closeMenu]
  );

  return (
    <div className="bg-[var(--color-background-secondary)]">
      <nav className="navbar-container">
        {/* Logo */}
        <div className="flex items-center py-[1.5rem]">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <ul className="list-group">
            {MENU_ITEMS.map((item) => (
              <NavigationItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-[1rem] py-[1rem]">
          <LanguageButton />
          <AuthButtons />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white p-2 cursor-pointer">
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Drawer */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black z-30 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[var(--color-background-secondary)] z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <Logo />
          <button onClick={closeMenu} className="text-white p-2 cursor-pointer">
            <MenuIcon isOpen={true} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 space-y-6 overflow-y-auto h-full pb-20">
          {/* Mobile Menu Items */}
          <ul className="space-y-4">
            {MENU_ITEMS.map((item) => (
              <NavigationItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onClick={handleMenuItemClick}
                isMobile={true}
              />
            ))}
          </ul>

          {/* Mobile Actions */}
          <div className="border-t border-gray-700 pt-6 space-y-3">
            <LanguageButton isMobile={true} />
            <AuthButtons isMobile={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
