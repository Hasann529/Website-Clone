import React from "react";
import "./Pricing.scss";
import Plan from "./Plan";

const PlanArray = [
  { days: 3, expensiveness: 4 },
  { days: 7, expensiveness: 3 },
  { days: 15, expensiveness: 2 },
  { days: 30, expensiveness: 1 },
];

const Pricing = ({ net }) => {
  return (
    <div className="pricing">
      {PlanArray.map((plan) => (
        <Plan plan={plan} key={plan.days} net={net} />
      ))}
    </div>
  );
};

export default Pricing;
