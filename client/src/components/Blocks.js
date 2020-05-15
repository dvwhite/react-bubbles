import React, { useState, useEffect } from "react";
import { Pack } from "@potion/layout";
import { Svg, Rect } from "@potion/element";

const Blocks = ({ colors }) => {
  const [bubbleData, setBubbleData] = useState([]);
  useEffect(() => {
    const generateBubbleData = colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setBubbleData(generateBubbleData);
  }, [colors]);

  return (
    <div className="bubble-wrap">
      <p>blocks</p>
      <Svg width={400} height={400}>
        <Pack
          data={{
            children: bubbleData
          }}
          sum={datum => datum.value}
          size={[400, 400]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, x: 500, y: 500 })}
          animate
        >
          {nodes =>
            nodes
              .map(({ x, y, key }, i) => {
                if (i < colors.length) {
                  return (
                    <Rect
                     x={x}
                     y={y}
                     width={50}
                     height={50} 
                     fill={colors[i].code.hex} 
                    />
                  );
                }
                return null;
              })
              .filter(v => v)
          }
        </Pack>
      </Svg>
    </div>
  );
};

export default Blocks;
