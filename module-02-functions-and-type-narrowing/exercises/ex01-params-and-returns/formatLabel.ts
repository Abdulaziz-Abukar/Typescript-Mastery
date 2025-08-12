function formatLabel(label: string, prefix = "INFO") {
  return prefix ? `${prefix}: ${label}` : label;
}

console.log(formatLabel("System Info"));
console.log(formatLabel("System Info", "LABEL"));
console.log(formatLabel("System Info", "ECHO"));
