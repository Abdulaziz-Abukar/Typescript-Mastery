type Plan = "free" | "pro" | "team";

function handlePlan(plan: Plan) {
  if (plan === "free") return "Free plan";
  if (plan === "pro") return "Pro plan";
  if (plan === "team") return "Team plan";

  // Force error if new Plan value is added and not handled
  const _exhaustive: never = plan;
  return _exhaustive;
}
console.log(handlePlan("free"));
console.log(handlePlan("team"));
