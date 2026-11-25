// File: frontend/components/Table/Table.js
// Purpose: The design-system table: bordered box, sunken header row, hairline rows.
//          Scrolls sideways inside its box on small screens.
// Source: docs/design/system/components.d.ts (TableProps)
// Screens: PUB-02 and any screen with a data table

import styles from "./Table.module.css";

// Shows a table. columns = [{ key, label, align, mono }], rows = [{ [key]: cell content }].
// caption is read by screen readers only.
export default function Table({ columns, rows, caption }) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        {caption && <caption className={styles.caption}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" style={{ textAlign: column.align || "left" }}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.row} style={{ animationDelay: rowIndex * 40 + "ms" }}>
              {columns.map((column) => {
                let cellClass = undefined;
                if (column.mono) {
                  cellClass = styles.mono;
                }
                return (
                  <td key={column.key} className={cellClass} style={{ textAlign: column.align || "left" }}>
                    {row[column.key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
