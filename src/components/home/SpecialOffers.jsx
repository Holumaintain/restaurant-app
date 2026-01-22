// SpecialOffers.jsx
export default function SpecialOffers() {
  const offers = [
    { title: "20% Off on Burgers", description: "Only today!", emoji: "🍔" },
    { title: "Buy 1 Get 1 Salad", description: "Healthy & Fresh", emoji: "🥗" },
    { title: "Free Dessert", description: "On orders above $30", emoji: "🍨" },
  ];

  return (
    <section className="container my-5">
      <h3 className="mb-4 text-center">Special Offers</h3>
      <div className="row">
        {offers.map((offer, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card p-3 text-center">
              <div style={{ fontSize: "2rem" }}>{offer.emoji}</div>
              <h5 className="mt-2">{offer.title}</h5>
              <p className="text-muted">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
