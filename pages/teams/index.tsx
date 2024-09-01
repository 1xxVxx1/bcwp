import { useState } from "react";
const members = require("/mockData.json");

export default function Teams () {
  const [viewSort, setViewSort] = useState("MR");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("바뀜!");
    const newValue = e.target.value;
    setViewSort(newValue);
  }

  return (
    <div>
      <select name="단위" value={viewSort} onChange={handleChange}>
        <option value="MR">MR</option>
        <option value="TEAM">TEAM</option>
      </select>
      <ul>
        {
          members.map((mr: any) => {
            return (<li key={mr.mr}>{mr.team}</li>);
          })
          }
      </ul>
    </div>
  );
};