import React from 'react';
import styles from '../../styles/components/Pagination.module.scss';

const Pagination = ({ page = 1, total = 1, onChange }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <button disabled={page <= 1} onClick={() => onChange && onChange(page - 1)}>
        &lt;
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={p === page ? styles.active : ''}
          onClick={() => onChange && onChange(p)}
        >
          {p}
        </button>
      ))}
      <button disabled={page >= total} onClick={() => onChange && onChange(page + 1)}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
