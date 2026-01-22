// src/components/category/CategorySidebar.jsx
import CategoryItem from "./CategoryItem.jsx";

const categories = [
  { id: "trending", icon: "🔥", title: "Trending", count: 124 },
  { id: "vegetables", icon: "🥬", title: "Vegetables", count: 89 },
  { id: "fruits", icon: "🍎", title: "Fresh Fruits", count: 156 },
  { id: "dairy", icon: "🥛", title: "Dairy & Eggs", count: 146 },
  { id: "bakery", icon: "🥖", title: "Bakery", count: 97 },
  { id: "meat", icon: "🥩", title: "Meat & Seafood", count: 178 },
];

export default function CategorySidebar() {
  return (
    <aside className="sticky-top" style={{ top: "100px" }}>
      <div
        className="rounded-4 p-4"
        style={{
          background: "linear-gradient(135deg, #FFF5F0, #FFE5D9)",
          border: "2px solid #FFD4C4",
        }}
      >
        <h6 className="fw-bold text-center mb-4">🍴 Categories</h6>
        <nav className="d-flex flex-column gap-2">
          {categories.map((cat) => (
            <CategoryItem key={cat.id} {...cat} />
          ))}
        </nav>
      </div>
    </aside>
  );
}
