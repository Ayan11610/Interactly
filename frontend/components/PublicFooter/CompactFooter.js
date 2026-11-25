// File: frontend/components/PublicFooter/CompactFooter.js
// Purpose: The one-row dark footer used by the Pricing and Features pages.
// Screens: PUB-02, PUB-03

import Link from "next/link";
import Container from "@/components/Container/Container";
import styles from "./CompactFooter.module.css";

const links = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

// Shows the name, four links and the copyright line. Used through <PublicFooter compact />.
export default function CompactFooter({ copyright }) {
  return (
    <footer className={styles.footer}>
      <Container className={styles.row}>
        <span className={styles.name}>Interactly</span>
        <nav className={styles.links} aria-label="Footer">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
        <span className={styles.copyright}>{copyright}</span>
      </Container>
    </footer>
  );
}
