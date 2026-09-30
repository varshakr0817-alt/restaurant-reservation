import { useState } from "react";
import { supabase } from "../supabase";

function ReservationHistory() {
  const [reservations, setReservations] = useState([]);

  async function getReservations() {
    const { data, error } = await supabase.from("reservations").select("*");
    if (error) {
      console.error(error);
      alert("Failed to fetch reservations");
      return;
    }
    setReservations(data);
  }

  return (
    <main className="history-page">
      <h1>All Reservations</h1>
      <button className="history-button" onClick={getReservations}>
        View Reservations
      </button>

      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Guests</th>
              <th>Seating Area</th>
              <th>Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((item) => (
              <tr key={item.id}>
                <td>{item.guest_name}</td>
                <td>{item.guests_count}</td>
                <td>{item.seating_area}</td>
                <td>{item.time_slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ReservationHistory;