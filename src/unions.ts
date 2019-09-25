function compare(x: string | number, y: string | number) {
  if (typeof x === "number") {
    return x === y ? 0 : x > y ? 1 : -1;
  } else if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
  throw "Unknown types";
}

export const hel = compare("x", "y");
console.log(hel);
export const hehe = compare(1, 2);
