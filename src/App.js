import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
       "https://hp-api.onrender.com/api/characters"
        // "https://hp-api.herokuapp.com/api/characters"
      );
      const modifiedData = response.data.splice(0, 100).filter((el) => {
        return el.name.includes(search);
      });
      setData(modifiedData);
    };

    fetchData();
  }, [search]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {data !== null ? <Characters data={data} /> : null}
    </div>
  );
}

export default App;
