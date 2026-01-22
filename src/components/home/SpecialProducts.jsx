// SpecialProducts.jsx
export default function SpecialProducts() {
  const products = [
    { name: "Organic Salad", price: "$12", emoji: "🥗" },
    { name: "Vegan Burger", price: "$15", emoji: "🍔" },
    { name: "Fresh Sushi", price: "$20", emoji: "🍣" },
  ];

  return (
    <section className="container my-5">
      <h3 className="mb-4 text-center">Special Products</h3>
      <div className="row">
        {products.map((p, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card p-3 text-center">
              <div style={{ fontSize: "2rem" }}>{p.emoji}</div>
              <h5 className="mt-2">{p.name}</h5>
              <p className="text-muted">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
