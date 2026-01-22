import { useState } from 'react';

export default function CategoryItem({ id, icon, title, count }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={`#${id}`}
      className="d-flex align-items-center p-3 mb-2 rounded text-decoration-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? '#ff6b35' : '#ffffff',
        color: hover ? '#ffffff' : '#2d3436',
        transition: 'all 0.25s ease',
        border: '1px solid #eee',
      }}
    >
      <span
        className="me-3 d-flex align-items-center justify-content-center"
        style={{
          width: 42,
          height: 42,
          borderRadius: '50%',
          fontSize: '1.4rem',
          background: hover ? 'rgba(255,255,255,0.2)' : '#fff3ed',
        }}
      >
        {icon}
      </span>

      <div className="flex-grow-1">
        <div className="fw-semibold">{title}</div>
        <small style={{ opacity: 0.7 }}>{count} items</small>
      </div>
    </a>
  );
}
