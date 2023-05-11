import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./OurMenu.scss";


const OurMenu = () => {
  const [itemArray, setItemArray] = useState([]);

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
    setItemArray([])
    getData();
  }, []);


  return (
    <div className="our-menu">
      <h1>
        Our <span>Menu</span>
      </h1>
      <div className="menu-items">
        {itemArray.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.imgUrl.stringValue} alt="dish" />
            <p>{item.name.stringValue}</p>
            <span>
              Kcal-
              <span style={{ color: "#80B53B" }}>
                {item.calories.integerValue}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
