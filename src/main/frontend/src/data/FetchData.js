import { useEffect } from "react";

function FetchData() {
  useEffect(() => {
    fetch("http://localhost:8080/data/all")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return <div>Different ways to fetch Data</div>;
}

export default FetchData;
