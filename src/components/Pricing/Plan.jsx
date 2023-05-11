import React from "react";
import "./Plan.scss";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

const Plan = ({ plan, net }) => {
  return (
    <div className="plan">
      <input
        type="radio"
        name="plan"
         defaultChecked={plan.days.integerValue === 3}
      />
      <p>{plan.days.integerValue} Days</p>
      <hr></hr>
      <div>
        <div>
          <span
            style={{ color: "black", fontSize: "1.5rem", fontWeight: "600" }}
          >
            ₹{net * plan.expensiveness.integerValue} 
          </span>
          &nbsp; / Per Meal
        </div>
        <div>
          <div>
            <b style={{ color: "black", fontSize: "1.15rem" }}>₹ </b>{" "}
            {net * plan.expensiveness.integerValue * plan.days.integerValue} for{" "}
            {`${plan.days.integerValue} `}
            days
          </div>
          <div>{60 - plan.expensiveness.integerValue * 10} % Off</div>
        </div>
      </div>
      <hr></hr>
      <div>
        {" "}
        <DeliveryDiningIcon /> Free Delivery
      </div>
    </div>
  );
};

export default Plan;
