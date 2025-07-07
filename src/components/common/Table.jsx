import React from 'react';
import styles from '../../styles/components/Table.module.scss';

const Table = ({ columns = [], data = [], className = '' }) => {
  return (
    <table className={`${styles.table} ${className}`}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key || col}>{col.label || col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={row.id || idx}>
            {columns.map((col) => (
              <td key={col.key || col}>{row[col.key || col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
