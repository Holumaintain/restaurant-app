// src/components/ui/GeolocationCart.jsx
import React, { useEffect, useState } from "react";

const GeolocationCart = ({ cartItems, subtotal, offcanvasId = "shoppingCart" }) => {
  const [geoBanner, setGeoBanner] = useState("");
  const [nearestStore, setNearestStore] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [adjustedSubtotal, setAdjustedSubtotal] = useState(Number(subtotal) || 0);

  // Geolocation effect
  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoBanner("Geolocation not supported in your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setGeoBanner(
          `Your location detected: Lat ${latitude.toFixed(4)}, Lon ${longitude.toFixed(4)}.`
        );

        // Example nearest store calculation
        const store = {
          name: "Downtown Grocery",
          lat: latitude,
          lon: longitude,
        };
        setNearestStore(store);
        setSelectedAddress(store.name);

        // Adjust subtotal example (regional tax)
        const tax = latitude > 40 ? Number(subtotal) * 0.08 : Number(subtotal) * 0.05;
        setAdjustedSubtotal(Number(subtotal) + tax);
      },
      () => {
        setGeoBanner("Unable to detect location. Please select an address manually.");
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  }, [subtotal]);

  return (
    <>
      {/* Shopping Cart Offcanvas */}
      <div
        className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
        id={offcanvasId} // ✅ Must match Navbar / FloatingCart
        tabIndex="-1"
        aria-labelledby={`${offcanvasId}Label`}
        style={{ width: "500px" }}
      >
        {/* Header */}
        <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
            <h4 className="offcanvas-title" id={`${offcanvasId}Label`}>
              Shopping cart
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          {geoBanner && (
            <div className="alert alert-info text-dark-emphasis fs-sm border-0 rounded-4 mb-0">
              {geoBanner}
            </div>
          )}
        </div>

        {/* Cart Items */}
        <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cartItems.map((item, idx) => (
              <div key={item.id || idx} className="d-flex align-items-center">
                <a className="position-relative flex-shrink-0" href={item.href}>
                  {item.discount && (
                    <span className="badge text-bg-danger position-absolute top-0 start-0 z-2 mt-0 ms-0">
                      -${item.discount}
                    </span>
                  )}
                  <img src={item.img} width="110" alt={item.name} />
                </a>
                <div className="w-100 ps-3">
                  <h5 className="fs-sm fw-medium lh-base mb-2">
                    <a className="hover-effect-underline" href={item.href}>
                      {item.name}
                    </a>
                  </h5>
                  <div className="h6 pb-1 mb-2">${item.price}</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="count-input rounded-pill d-flex align-items-center">
                      <button
                        type="button"
                        className="btn btn-icon btn-sm"
                        onClick={item.onDecrement}
                      >
                        <i className="ci-minus"></i>
                      </button>
                      <input
                        type="number"
                        className="form-control form-control-sm text-center"
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        type="button"
                        className="btn btn-icon btn-sm"
                        onClick={item.onIncrement}
                      >
                        <i className="ci-plus"></i>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="btn-close fs-sm"
                      onClick={item.onRemove}
                      aria-label="Remove from cart"
                    ></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="offcanvas-header flex-column align-items-start">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
            <span className="text-light-emphasis">Subtotal:</span>
            <span className="h6 mb-0">${adjustedSubtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex w-100 gap-3">
            <a className="btn btn-lg btn-secondary w-100 rounded-pill" href="/cart">
              View cart
            </a>
            <a className="btn btn-lg btn-primary w-100 rounded-pill" href="/checkout">
              Checkout
            </a>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="offcanvas-body py-2 py-sm-3">
          <div className="collapse delivery-address show" id="deliveryAddressOptions">
            {nearestStore && (
              <div className="form-check border-bottom py-4">
                <input
                  type="radio"
                  className="form-check-input"
                  id="geo-store"
                  name="delivery-address"
                  checked={selectedAddress === nearestStore.name}
                  readOnly
                />
                <label
                  className="form-check-label text-dark-emphasis fw-semibold"
                  htmlFor="geo-store"
                >
                  🏪 Nearest store: {nearestStore.name} (Lat{" "}
                  {nearestStore.lat.toFixed(4)}, Lon {nearestStore.lon.toFixed(4)})
                </label>
              </div>
            )}

            {/* Static addresses */}
            <div className="form-check border-bottom py-4">
              <input
                type="radio"
                className="form-check-input"
                id="address-1"
                name="delivery-address"
                checked={selectedAddress === "567 Cherry Lane Apt B12"}
                onChange={() => setSelectedAddress("567 Cherry Lane Apt B12")}
              />
              <label
                className="form-check-label text-dark-emphasis fw-semibold"
                htmlFor="address-1"
              >
                567 Cherry Lane Apt B12 Sacramento, 95829
              </label>
            </div>
            <div className="form-check border-bottom py-4">
              <input
                type="radio"
                className="form-check-input"
                id="address-2"
                name="delivery-address"
                checked={selectedAddress === "1901 Thornridge Cir"}
                onChange={() => setSelectedAddress("1901 Thornridge Cir")}
              />
              <label
                className="form-check-label text-dark-emphasis fw-semibold"
                htmlFor="address-2"
              >
                1901 Thornridge Cir. Shiloh, Hawaii, 81063
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeolocationCart;
