export {};

type OrderStatus = "pending" | "shipped" | "delivered";

function getStatusMessage(status: OrderStatus): string {
  if (status === "pending") {
    return "Inihahanda pa ang order";
  } else if (status === "shipped") {
    return "Papunta na ang order";
  } else {
    return "Natanggap na ang order";
  }
}

function formatId(id: string | number): string {
  if (typeof id === "number") {
    return `ID-${id}`;
  } else {
    return `${id.toUpperCase()}`;
  }
}

console.log(getStatusMessage("pending")); // Inihahanda pa ang order
console.log(getStatusMessage("delivered")); // Natanggap na ang order
console.log(formatId(42)); // ID-42
console.log(formatId("abc-7")); // ABC-7
