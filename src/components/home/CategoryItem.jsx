import { useState } from 'react';

function CategoryItem({ id, icon, title, count }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={`#${id}`}
      className="text-decoration-none d-flex align-items-center p-3 rounded-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? '#FF6B35' : '#FFFFFF',
        transform: hover ? 'translateX(5px)' : 'translateX(0)',
        transition: 'all 0.3s ease',
      }}
    >
      <span
        className="rounded-circle me-3 d-flex align-items-center justify-content-center"
        style={{
          width: 45,
          height: 45,
          fontSize: '1.3rem',
          backgroundColor: hover ? 'rgba(255,255,255,0.2)' : '#FFF5F0',
        }}
      >
        {icon}
      </span>

      <div className="flex-grow-1">
        <div
          className="fw-semibold"
          style={{ color: hover ? '#FFF' : '#2d3436' }}
        >
          {title}
        </div>
        <div
          className="fs-xs"
          style={{ color: hover ? '#FFE8DF' : '#b2bec3' }}
        >
          {count} products
        </div>
      </div>
    </a>
  );
}

export default CategoryItem;
