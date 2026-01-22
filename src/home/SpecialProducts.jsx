export default function SpecialProducts() {
  return (
    <section className="container py-4">
      <h3>⭐ Special Products</h3>
      <div className="row">
        {[1, 2].map(i => (
          <div className="col-md-6" key={i}>
            <div className="card p-3">Special Product {i}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
