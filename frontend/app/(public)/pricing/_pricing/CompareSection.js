// File: frontend/app/(public)/pricing/_pricing/CompareSection.js
// Purpose: "Everything side by side": a table comparing the three plans feature by feature.
// Screens: PUB-02

import Container from "@/components/Container/Container";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Table from "@/components/Table/Table";
import Icon from "@/components/Icon/Icon";
import { compareRows } from "./planData";
import styles from "./CompareSection.module.css";

const columns = [
  { key: "feature", label: "Feature" },
  { key: "free", label: "Free" },
  { key: "pro", label: "Pro" },
  { key: "team", label: "Team" },
];

// Turns one cell value into what the table shows: a tick, a cross, or the text itself
function renderCell(value) {
  if (value === true) {
    return <Icon name="check" size={18} strokeWidth={2.6} color="var(--success-text)" label="Included" />;
  }
  if (value === false) {
    return <Icon name="close" size={16} strokeWidth={2.4} color="var(--error-text)" label="Not included" />;
  }
  return value;
}

// Shows the heading and the comparison table
export default function CompareSection() {
  const rows = [];
  for (let i = 0; i < compareRows.length; i++) {
    const row = compareRows[i];
    rows.push({
      feature: row.feature,
      free: renderCell(row.free),
      pro: renderCell(row.pro),
      team: renderCell(row.team),
    });
  }

  return (
    <section className={styles.section} aria-labelledby="compare-heading">
      <Container className={styles.inner}>
        <SectionHeading id="compare-heading" eyebrow="COMPARE" title="Everything side by side" />
        <Table columns={columns} rows={rows} caption="Plan comparison" />
      </Container>
    </section>
  );
}
