import React from "react"
import data from "../data";
import { G, Circle, Path } from "react-native-svg";



export default function Scatter({effect}){
  const renderWithCircle = () => data.map((d, i) => 
    <Circle 
      key={i} 
      cx={d.x} 
      cy={d.y} 
      r={1} 
      fill="black"
      />
    );

    const renderWithPath = () => {
      const d = data.map((d) => `M ${d.x} ${d.y} v0`).join("");
      return <Path d={d} strokeWidth={2} stroke="black" strokeLinecap="round" 
              vectorEffect={effect ? "nonScalingStroke" : "none"}
              />
    }
return (
  <G>
    {renderWithPath()}
  </G>
)
}