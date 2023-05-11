import React from "react";
import "./Plan.scss";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";


const Plan = ({ plan, net }) => {
  return (
    <div className="plan">
      <input type="radio" name="plan" defaultChecked={plan.days === 3} />
      <p>{plan.days} Days</p>
      <hr></hr>
      <div>
        <div>
          <span
            style={{ color: "black", fontSize: "1.5rem", fontWeight: "600" }}
          >
            ₹{net * plan.expensiveness}
          </span>
          / Per Meal
        </div>
        <div>
          <div>
            <b style={{ color: "black", fontSize: "1.15rem" }}>₹ </b> {net * plan.expensiveness*plan.days} for{" "}
            {`${plan.days} `}
            days
          </div>
          <div>{60 - plan.expensiveness * 10} % Off</div>
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
