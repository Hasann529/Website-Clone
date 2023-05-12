import React, { useEffect, useState } from "react";
import "./SubscriptionPlan.scss";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import blurpic from "../../assets/blurpic.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Pricing from "../Pricing/Pricing";

const SubscriptionPlan = () => {
  const [nonvegToggle, setNonvegToggle] = useState(false);
  const [timeToggle, setTimeToggle] = useState(false);
  const [selectedArray, setSelectedArray] = useState([]);
  const [itemArray, setItemArray] = useState([]);
  const [net, setNet] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Dishes"));

        querySnapshot.docs.map((doc) =>
          setItemArray((prev) => [
            ...prev,
            doc._document.data.value.mapValue.fields,
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    setItemArray([]);
    getData();
  }, []);

  const addItem = (item) => {
    setSelectedArray((prev) =>
      prev.includes(item.name.stringValue)
        ? selectedArray.filter((i) => i !== item.name.stringValue)
        : [...prev, item.name.stringValue]
    );
    setNet((prev) =>
      selectedArray.includes(item.name.stringValue)
        ? Number(prev) - Number(item.price.integerValue)
        : Number(prev) + Number(item.price.integerValue)
    );
  };

  return (
    <div className="subscription">
      <div className="main">
        <div className="upper">
          <img src={blurpic} alt="blur-pic" />
          <div>
            <p>Select your preference</p>
            <div className="veg-nonveg">
              <h6>Diet Preference*</h6>
              <div>
                <button>Veg</button>
                <button
                  onClick={() => setNonvegToggle(!nonvegToggle)}
                  style={{
                    backgroundColor: nonvegToggle ? "#80B53B" : "#ffffff",
                    color: nonvegToggle ? "#ffffff" : "#000000",
                    border: "1px solid #00000015",
                  }}
                >
                  Non-Veg
                </button>
              </div>
            </div>
            <div className="lunch-dinner">
              <h6>Select Meal Time*</h6>
              <div>
                <button>Lunch</button>
                <button
                  onClick={() => setTimeToggle(!timeToggle)}
                  style={{
                    backgroundColor: timeToggle ? "#80B53B" : "#ffffff",
                    color: timeToggle ? "#ffffff" : "#000000",
                    border: "1px solid #00000015",
                  }}
                >
                  Dinner
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <h5>Lunch Packages</h5>
          <div></div>
          <div>Individual</div>
          <div>
            {itemArray.map((item, index) => (
              <div className="dish-item" key={index}>
                <input type="checkbox" onClick={() => addItem(item)} />
                <img src={item.imgUrl.stringValue} alt="dishimg" />
                <p>{item.name.stringValue}</p>
                <span>
                  What you will get <ArrowForwardIcon />
                </span>
              </div>
            ))}
          </div>
        </div>
        {selectedArray.length !== 0 && (
          <Pricing selectedArray={selectedArray} net={net} />
        )}
        {selectedArray.length !== 0 && <button>Proceed</button>}
      </div>
    </div>
  );
};

export default SubscriptionPlan;
