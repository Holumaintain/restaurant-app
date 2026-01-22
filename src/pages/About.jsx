import React from "react";

export default function About() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">About Fresh Fork</h2>

      <p className="text-muted text-center mb-4">
        Fresh Fork is a modern food ordering platform focused on quality,
        convenience, and great taste.
      </p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="border rounded p-4 h-100">
            <h6 className="fw-bold">🥗 Fresh Ingredients</h6>
            <p className="small text-muted">
              We source only the best and freshest ingredients.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-4 h-100">
            <h6 className="fw-bold">🚀 Fast Service</h6>
            <p className="small text-muted">
              Quick preparation and timely delivery.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-4 h-100">
            <h6 className="fw-bold">⭐ Customer First</h6>
            <p className="small text-muted">
              Your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
