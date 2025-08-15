// Template literal types combine strings & unions

type Variant = "primary" | "secondary" | "danger";
type Size = "sm" | "md" | "lg";

// Generate class names like "btn-primary-sm"
type ButtonClass = `btn-${Variant}-${Size}`;

const a: ButtonClass = "btn-primary-sm";
const b: ButtonClass = "btn-danger-lg";
// const bad: ButtonClass = "btn-unknown-md"; // ❌ not allowed

// Using built-in string manipulation helpers
type EventHook = `on${Capitalize<Variant>}`; // "onPrimary" | "onSecondary" | "onDanger"
const hook: EventHook = "onPrimary";

console.log(a, b, hook);
