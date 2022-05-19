import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://hp-api.herokuapp.com/api/characters"
      );
      console.log("response.data", response.data);

      const modifiedData = response.data.splice(0, 10);

      setData(modifiedData);
    };

    // fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      {data !== null ? <Characters data={data} /> : null}
    </div>
  );
}

export default App;
