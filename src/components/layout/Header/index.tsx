"use client";

import Link from "next/link";
import LanguageSelect from "@/components/ui/languageSelect";
import { CartIcon, SavedIcon, SearchIcon } from "@/components/icons";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import "./style.scss";

export const Header = () => {
  const navLinks = [
    { title: "Konsertlar", href: "/concerts" },
    { title: "Biz haqimizda", href: "/about" },
    { title: "Bolalar uchun", href: "/kids" },
    { title: "Mahalliy tadbirlar", href: "/local-events" },
    { title: "News", href: "/news" },
    { title: "360", href: "/360" },
  ];

  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <div className="header__wrapper__img">
            <Image src="/logo.png" alt="Logo" width={100} height={50} />
          </div>
          <div className="header__wrapper__nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="header__wrapper__nav-link"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="header__wrapper__actions">
            <LanguageSelect />
            <div className="header__wrapper__actions-icon header__wrapper__actions-icon--search">
              <SearchIcon />
            </div>
            <div className="header__wrapper__actions-icon header__wrapper__actions-icon--saved">
              <SavedIcon />
            </div>
            <div className="header__wrapper__actions-icon header__wrapper__actions-icon--cart">
              <CartIcon />
            </div>

            <div className="header__wrapper__actions-divider" />

            <div className="header__wrapper__actions-btn">Kirish</div>
          </div>
        </div>
      </Container>
    </header>
  );
};
