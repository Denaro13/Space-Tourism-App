import data from "./data";

//api/destinations

export default function handler(req, res) {
  const { destinations } = data;
  if (destinations) return res.status(200).json(destinations);
  return res.status(404).json({ error: "Data Not Found" });
}
