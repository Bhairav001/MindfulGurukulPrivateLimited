import React, { useEffect, useState } from 'react'

const fetchData = async () => {
  const response = await fetch("http://localhost:8080/users/");
  const data = await response.json(); // Convert response to JSON
  return data;
};
const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetchData()
    .then((res) => {
      console.log("Data:", res);
      setData(res); // Set the data into the state
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  },[])
  console.log("myData",data)
  return (
    <div>
        
    </div>
  )
}

export default Dashboard