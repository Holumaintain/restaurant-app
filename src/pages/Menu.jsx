import CategorySidebar from '../components/category/CategorySidebar';

export default function Menu() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-3">
          <CategorySidebar />
        </div>

        <div className="col-md-9">
          <h2>Menu Items</h2>
          <p>Select a category to view products.</p>
        </div>
      </div>
    </div>
  );
}
