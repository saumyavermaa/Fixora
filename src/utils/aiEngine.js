export function detectCategory(text = "") {
  text = text.toLowerCase();

  if (text.includes("road") || text.includes("pothole")) return "Road Issue";
  if (text.includes("water") || text.includes("leak")) return "Water Issue";
  if (text.includes("light") || text.includes("electric")) return "Electricity Issue";
  if (text.includes("garbage") || text.includes("waste")) return "Sanitation Issue";

  return "General Issue";
}

export function detectPriority(text = "") {
  text = text.toLowerCase();

  if (text.includes("danger") || text.includes("accident")) return "HIGH";
  if (text.includes("urgent") || text.includes("flood")) return "HIGH";
  if (text.includes("delay")) return "MEDIUM";

  return "LOW";
}