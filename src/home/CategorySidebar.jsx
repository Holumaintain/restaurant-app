import CategoryItem from './CategoryItem';

const categories = [
  { id: 'trending', icon: '🔥', title: 'Trending', count: 12 },
  { id: 'vegetables', icon: '🥬', title: 'Vegetables', count: 8 },
  { id: 'fruits', icon: '🍎', title: 'Fruits', count: 15 },
  { id: 'dairy', icon: '🥛', title: 'Dairy & Eggs', count: 10 },
  { id: 'bakery', icon: '🥖', title: 'Bakery', count: 6 },
  { id: 'meat', icon: '🥩', title: 'Meat & Seafood', count: 9 },
];

export default function CategorySidebar() {
  return (
    <aside
      className="p-3 rounded"
      style={{
        minWidth: '260px',
        background: '#fff7f3',
        border: '1px solid #ffd7c8',
      }}
    >
      <h5 className="fw-bold text-center mb-3">🍴 Categories</h5>

      <nav>
        {categories.map((cat) => (
          <CategoryItem key={cat.id} {...cat} />
        ))}
      </nav>
    </aside>
  );
}
