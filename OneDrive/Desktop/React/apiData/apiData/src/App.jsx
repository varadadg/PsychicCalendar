import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import DataTable from "./DataTable";

function App() {
  const [responseData, setResponse] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setResponse(Object.values(data));
        console.log(Object.values(data));
      })
      .then((data) => {
        data.map((item) => {
          return { name: item.name.charAt(0).toUpperCase() };
        });
      })
      .then(console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array, so this effect runs only once on mount

  // console.log("responseData outside fetch", responseData);
  // let response2 = [
  //   { name: "jai", phone: "123", email: "gmail" },
  //   { name: "shankar" },
  // ];
  // const modifiedData = response2.map((item) => {
  //   return { name: item.name.charAt(0).toUpperCase() + item.name.slice(1) };
  // });
  // console.log(modifiedData);
  return (
    <>
      <div>The Data:</div>
      <DataTable />
    </>
  );
}

export default App;
