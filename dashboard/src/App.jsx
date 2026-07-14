import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./App.css";

function App() {
  const [prices, setPrices] = useState([]);
  const [changePoint, setChangePoint] = useState(null);
  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/prices")
      .then((r) => r.json())
      .then(setPrices);
    fetch("http://localhost:5000/api/changepoint")
      .then((r) => r.json())
      .then(setChangePoint);
    fetch("http://localhost:5000/api/events")
      .then((r) => r.json())
      .then(setEvents);
  }, []);

  const filteredPrices = prices.filter((p) => {
    if (startDate && p.Date < startDate) return false;
    if (endDate && p.Date > endDate) return false;
    return true;
  });

  const closestPriceDate =
    prices.length && changePoint
      ? prices.reduce((closest, p) => {
          const diff = Math.abs(new Date(p.Date) - new Date(changePoint.date));
          const closestDiff = Math.abs(
            new Date(closest.Date) - new Date(changePoint.date),
          );
          return diff < closestDiff ? p : closest;
        }, prices[0]).Date
      : null;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Brent Oil Price — Change Point Dashboard</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          From:{" "}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>{" "}
        <label>
          To:{" "}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredPrices}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" minTickGap={50} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Price"
            stroke="#2563eb"
            dot={false}
            name="Brent Price (USD/barrel)"
          />
          {changePoint && closestPriceDate && (
            <ReferenceLine
              x={closestPriceDate}
              stroke="red"
              strokeDasharray="4 4"
              label="Change Point"
            />
          )}
        </LineChart>
      </ResponsiveContainer>

      {changePoint && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            background: "#f3f4f6",
            borderRadius: "8px",
            color: "#111",
          }}
        >
          <h3>Detected Change Point: {changePoint.date}</h3>
          <p>
            Average weekly log return shifted from{" "}
            <b>{changePoint.mu_before.toFixed(5)}</b> to{" "}
            <b>{changePoint.mu_after.toFixed(5)}</b>, an implied{" "}
            <b>{changePoint.pct_change.toFixed(2)}%</b> change in average weekly
            growth rate.
          </p>
        </div>
      )}

      <h2 style={{ marginTop: "2rem" }}>Key Events</h2>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {events.map((ev) => (
          <div
            key={ev.event_id}
            style={{ padding: "0.5rem 0", borderBottom: "1px solid #e5e7eb" }}
          >
            <b>{ev.event_name}</b> — {ev.start_date} ({ev.category})
            <p style={{ margin: "0.25rem 0", color: "#555" }}>
              {ev.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
