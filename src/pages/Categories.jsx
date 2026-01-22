import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Breakfast", icon: "🍳" },
  { id: 2, name: "Lunch", icon: "🍛" },
  { id: 3, name: "Dinner", icon: "🍲" },
  { id: 4, name: "Drinks", icon: "🥤" },
  { id: 5, name: "Desserts", icon: "🍰" },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Food Categories</h2>

      <div className="row g-4">
        {categories.map((cat) => (
          <div key={cat.id} className="col-md-4 col-lg-3">
            <div
              className="border rounded p-4 text-center h-100 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate(`/menu?category=${encodeURIComponent(cat.name)}`)
              }
            >
              <div style={{ fontSize: "2rem" }}>{cat.icon}</div>
              <h6 className="mt-3 fw-bold">{cat.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
