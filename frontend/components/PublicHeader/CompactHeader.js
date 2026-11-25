// File: frontend/components/PublicHeader/CompactHeader.js
// Purpose: The shorter public header used by the Pricing and Features pages: logo,
//          three links, Log in and Start free. On phones the row simply wraps.
// Screens: PUB-02, PUB-03 (desktop and mobile)

import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import styles from "./CompactHeader.module.css";

const links = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Join a session", href: "/join" },
];

// Shows the compact header. Used through <PublicHeader compact />.
export default function CompactHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.home} aria-label="Interactly home">
          <Logo size={30} />
        </Link>

        <nav className={styles.links} aria-label="Site">
          {links.map((link) => (
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
          <Button href="/signup" variant="primary" size="md">
            Start free
          </Button>
        </div>
      </Container>
    </header>
  );
}
