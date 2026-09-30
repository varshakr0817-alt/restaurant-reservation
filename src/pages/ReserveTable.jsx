import { useState } from "react";
import { supabase } from "../supabase";

function ReserveTable() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [area, setArea] = useState("");
  const [time, setTime] = useState("");

  async function handleReservation() {
    if (!name || !guests || !area || !time) {
      alert("Please fill all details!");
      return;
    }

    const { error } = await supabase.from("reservations").insert([
      {
        guest_name: name,
        guests_count: Number(guests),
        seating_area: area,
        time_slot: time,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Reservation failed!");
      return;
    }

    alert("Table reserved successfully!");
    setName("");
    setGuests("");
    setArea("");
    setTime("");
  }

  return (
    <main className="booking-page">
      <h1>Reserve a Table</h1>
      <div className="booking-form">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter full name"
        />

        <label htmlFor="guests">Number of Guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="e.g. 4"
        />

        <label htmlFor="area">Seating Area</label>
        <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">-- Select Area --</option>
          <option value="Indoor Main Hall">Indoor Main Hall</option>
          <option value="Rooftop Lounge">Rooftop Lounge</option>
          <option value="Garden Patio">Garden Patio</option>
        </select>

        <label htmlFor="time">Time Slot</label>
        <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="">-- Select Time Slot --</option>
          <option value="7:00 PM">7:00 PM</option>
          <option value="8:00 PM">8:00 PM</option>
          <option value="9:00 PM">9:00 PM</option>
        </select>

        <button onClick={handleReservation}>Confirm Reservation</button>
      </div>

      <section className="booking-details">
        <h3>Reservation Preview</h3>
        <p>Name: <strong>{name || "-"}</strong></p>
        <p>Guests: <strong>{guests || "-"}</strong></p>
        <p>Area: <strong>{area || "-"}</strong></p>
        <p>Time: <strong>{time || "-"}</strong></p>
      </section>
    </main>
  );
}

export default ReserveTable;