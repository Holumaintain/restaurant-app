import React from "react";

export default function Events() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Upcoming Events</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="border rounded p-4 shadow-sm h-100">
            <h5 className="fw-bold">🍽️ Live Cooking Night</h5>
            <p className="text-muted">
              Watch our chefs prepare signature meals live.
            </p>
            <p className="small text-muted">📅 Every Friday</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-4 shadow-sm h-100">
            <h5 className="fw-bold">🎶 Dinner & Music</h5>
            <p className="text-muted">
              Enjoy your meals with soft live music.
            </p>
            <p className="small text-muted">📅 Saturdays</p>
          </div>
        </div>
      </div>
    </div>
  );
}
