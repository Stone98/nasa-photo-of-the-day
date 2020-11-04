import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "./components/Header/MainHeader";
import Content from "./components/Content/Content";
import "./App.css";

export default function App() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    const fetchApod = () => {
      axios
        .get('https://api.nasa.gov/planetary/apod?api_key=fiSmbXgpAzhnGLQVuIwNl85Ig4HDpfzjZCztuqOy')
        .then((res) => {
          setApod(res.data);
        })
        .catch((err) => {
          console.log('HELP! Something went wrong.');
        }
        )
    };
    fetchApod();
  }, []);

  return (
    <div className="App">
      <MainHeader apod={apod} />
      <Content apod={apod} />
    </div>
  );


}
