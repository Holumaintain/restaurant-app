export default function PopularItems() {
  return (
    <section className="container py-4">
      <h3 className="mb-3">🔥 Popular Items</h3>
      <div className="row">
        {[1, 2, 3].map(i => (
          <div className="col-md-4" key={i}>
            <div className="card p-3">Popular Item {i}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
