import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    const fetchApod = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=fiSmbXgpAzhnGLQVuIwNl85Ig4HDpfzjZCztuqOy')
        .then((res) => {
          setApod(res.data);
        })
        .catch((err) => {
          console.log('HELP!');
        }
        )
    };
    fetchApod();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{apod.title}</h1>
      </header>
      <div>

      </div>
    </div>
  );


}
