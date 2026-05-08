export function categorizeIssue(text = "") {
  text = text.toLowerCase();

  if (text.includes("road")) return "Road Issue";
  if (text.includes("water")) return "Water Issue";
  if (text.includes("light")) return "Electricity Issue";

  return "General Issue";
}