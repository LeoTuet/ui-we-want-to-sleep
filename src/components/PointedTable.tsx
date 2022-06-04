import React from "react";

import styles from "./PointedTable.module.scss";

export type DetailElement = React.ReactElement | string;

export interface PointedTableProps {
  rows: { title: string; detail: DetailElement }[];
}

export const PointedTable = ({ rows }: PointedTableProps) => {
  return (
    <div className={styles.lineTable}>
      {rows.map((row) => (
        <div
          className={styles.row}
          key={`${row.title}-${row.detail.toString()}`}
        >
          <p>{row.title}</p>
          <div className={styles.pointDividerContainer}>
            <span className={styles.pointDivider}></span>
          </div>
          <p>{row.detail}</p>
        </div>
      ))}
    </div>
  );
};
