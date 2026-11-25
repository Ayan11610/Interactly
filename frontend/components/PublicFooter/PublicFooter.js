// File: frontend/components/PublicFooter/PublicFooter.js
// Purpose: Dark footer of the public site: mascot, credit line, link columns and copyright.
// Screens: PUB-01 (PUB-02 and PUB-03 use a compact version, added with those pages)

import Link from "next/link";
import Container from "@/components/Container/Container";
import styles from "./PublicFooter.module.css";

// The three link columns shown in the footer
const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Join a session", href: "/join" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Log in", href: "/login" },
      { label: "Create account", href: "/signup" },
      { label: "Help", href: "/help" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "About", href: "/about" },
    ],
  },
];

// Draws the large footer mascot (the lemon with an antenna)
function FooterMascot() {
  return (
    <svg width="110" height="110" viewBox="0 0 120 120" aria-hidden="true">
      <path className={styles.antenna} d="M50 22 L58 6 L66 22" />
      <circle className={styles.face} cx="60" cy="64" r="44" />
      <circle className={styles.eyeWhite} cx="46" cy="58" r="9" />
      <circle className={styles.eyeWhite} cx="74" cy="58" r="9" />
      <circle className={styles.pupil} cx="46" cy="58" r="4" />
      <circle className={styles.pupil} cx="74" cy="58" r="4" />
      <path className={styles.smile} d="M46 80 Q60 92 74 80" />
    </svg>
  );
}

// Shows the public footer. screenCode is printed after the copyright (e.g. "PUB-01").
export default function PublicFooter({ screenCode }) {
  let copyright = "© 2026 Interactly";
  if (screenCode) {
    copyright = copyright + " · " + screenCode;
  }

  return (
    <footer className={styles.footer}>
      <Container className={styles.top}>
        <div className={styles.brand}>
          <FooterMascot />
          <span className={styles.name}>Interactly</span>
          <span className={styles.credit}>Made by students at COMSATS University Islamabad, Wah Campus.</span>
        </div>

        <nav className={styles.columns} aria-label="Footer">
          {footerColumns.map((column) => (
            <div key={column.title} className={styles.column}>
              <span className={styles.columnTitle}>{column.title}</span>
              {column.links.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </Container>

      <Container className={styles.bottom}>{copyright}</Container>
    </footer>
  );
}
