import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTable } from "react-table";
import * as d3 from "d3";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8080/data/all");
      console.log(response);
      setData(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    const svg = d3.select("svg");
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.x))
      .range([0, svg.attr("width")]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y)])
      .range([svg.attr("height"), 0]);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.x))
      .attr("y", (d) => yScale(d.y))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => svg.attr("height") - yScale(d.y));
  }).catch((error) => console.error(error));
}

export default FetchData;
