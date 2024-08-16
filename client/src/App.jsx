import React, { useEffect, userEffect, userState, useState } from 'react';
import Header from "./Header.jsx";
import Footer from "./footer.jsx";
import Card from "./Card.jsx";
import axios from "axios"

//main function that ties everyting together
function App() {
  //create a empty array for backend to display it 
  const [array, setArray] = useState([]);


  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3001/api")
    setArray(response.data.users);
    console.log(response.data.users);

  };

  useEffect(() => {
    fetchAPI();

    //empty array ensure it only runs in initial render 
  }, [])
  return (
    <>
      <Header></Header>
      <hr></hr>
      <div className="group-card">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      {/* reading array from backend and displaying on react*/}
      <div>
        {array.map((users, index) => (
          <div key={index}>
            <p>
              {users}
            </p>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>

  );
}

export default App
