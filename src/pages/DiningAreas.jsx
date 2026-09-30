function AreaCard(props) {
  return (
    <div className="area-card">
      <h2>{props.title}</h2>
      <p>📍 Location: {props.location}</p>
      <p>💡 Ambience: {props.ambience}</p>
      <button>Book This Area</button>
    </div>
  );
}

function DiningAreas() {
  return (
    <main className="areas-page">
      <h1>Our Dining Spaces</h1>
      <div className="areas-grid">
        <AreaCard 
          title="Indoor Main Hall" 
          location="Ground Floor" 
          ambience="Cozy & Elegant" 
        />
        <AreaCard 
          title="Rooftop Lounge" 
          location="4th Floor" 
          ambience="Open Air & Scenic" 
        />
        <AreaCard 
          title="Garden Patio" 
          location="Outdoor Garden" 
          ambience="Relaxed & Fresh" 
        />
      </div>
    </main>
  );
}

export default DiningAreas;