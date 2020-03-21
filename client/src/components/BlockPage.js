import React, { useState, useEffect } from "react";
import axios from "axios";

// Helper functions
import { getColors } from '../utils/actions';

// Component imports
import Blocks from "./Blocks";
import ColorList from "./ColorList";

const BlockPage = () => {
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
      <Blocks colors={colorList} />
    </>
  );
};

export default BlockPage;
