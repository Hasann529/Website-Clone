import React, { useEffect, useState } from "react";
import "./Pricing.scss";
import Plan from "./Plan";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";


const Pricing = ({ net }) => {
  const [planArray, setPlanArray] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Plans"));

        querySnapshot.docs.map((doc) =>
          setPlanArray((prev) => [
            ...prev,
            doc._document.data.value.mapValue.fields,
          ])
        );

        setPlanArray((prev) =>
          prev.sort((a, b) => a.days.integerValue - b.days.integerValue)
        );
      } catch (error) {
        console.log(error);
      }
    };

    setPlanArray([]);
    getData();
  }, []);

  return (
    <div className="pricing">
      {planArray.map((plan) => (
        <Plan
          plan={plan}
          key={plan.days.integerValue}
          net={net}
        />
      ))}
    </div>
  );
};

export default Pricing;
