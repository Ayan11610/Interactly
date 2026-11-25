// File: frontend/components/PublicHeader/PublicHeader.js
// Purpose: Top bar of the public site: logo, page links, log in and sign up actions,
//          and a menu button that opens the links on phones.
// Screens: PUB-01, PUB-02, PUB-03 (desktop and mobile)

"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import Container from "@/components/Container/Container";
import CompactHeader from "./CompactHeader";
import styles from "./PublicHeader.module.css";

// Links shown in the desktop navigation
const desktopLinks = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
];

// Links shown in the phone menu (the design leaves out FAQ here)
const mobileLinks = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/pricing" },
  { label: "Log in", href: "/login" },
];

// Shows the public header. On phones the links move into a menu that opens below the bar.
// compact = the shorter header used by PUB-02 and PUB-03 (no menu button, links wrap).
export default function PublicHeader({ compact = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (compact) {
    return <CompactHeader />;
  }

  // Opens or closes the phone menu
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  // Closes the phone menu after a link is chosen
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.home} aria-label="Interactly home">
          <Logo size={30} />
        </Link>

        <nav className={styles.links} aria-label="Site">
          {desktopLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <span className={styles.spacer} />

        <div className={styles.actions}>
          <Link href="/login" className={styles.login}>
            Log in
          </Link>
          <Button href="/join" size="md">
            Join a session
          </Button>
          <Button href="/signup" variant="primary" size="md">
            Start free
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <Icon name="menu" size={22} />
        </button>
      </Container>

      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile">
          {mobileLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.mobileLink} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Button href="/signup" variant="primary" size="md" block className={styles.mobileCta} onClick={closeMenu}>
            Start free
          </Button>
        </nav>
      )}
    </header>
  );
}
