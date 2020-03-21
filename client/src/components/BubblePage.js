import React, { useState, useEffect } from "react";
import axios from "axios";

// Helper functions
import { getColors } from './../utils/actions';

// Component imports
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColors()
      .then(res => {
        setColorList(res.data)
      })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
