import React from "react";

export default function Offers() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Special Offers</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="border rounded p-4 shadow-sm h-100">
            <h5 className="fw-bold">🎉 10% Off First Order</h5>
            <p className="text-muted">
              Enjoy a discount on your first meal with Fresh Fork.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-4 shadow-sm h-100">
            <h5 className="fw-bold">🍔 Free Delivery</h5>
            <p className="text-muted">
              Free delivery on orders above ₦10,000.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-4 shadow-sm h-100">
            <h5 className="fw-bold">🥗 Healthy Combo</h5>
            <p className="text-muted">
              Get combo meals at special prices every weekday.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
