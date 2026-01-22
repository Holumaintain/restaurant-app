// src/components/home/Features.jsx
export default function Features() {
  return (
    <div className="container py-5 text-center">
      <h3 className="mb-4 fw-bold">Why Choose Us</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="p-3 border rounded">
            <h5>Fresh Ingredients</h5>
            <p>We use only the freshest ingredients for every meal.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border rounded">
            <h5>Fast Delivery</h5>
            <p>Get your order delivered quickly and safely.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border rounded">
            <h5>Best Quality</h5>
            <p>High-quality meals that make every bite enjoyable.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
