import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState } from "react";
import {
  BrowserRouter,
  Route,Routes
} from "react-router-dom";
import Gryffindor from "./containers/gryffindor";
import Slytherin from "./containers/Slytherin";
import Ravenclaw from "./containers/Ravenclaw";
import Hufflepuff from "./containers/Hufflepuff";
function App() {
  const [data, setData] = useState(null);
  
  
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //      "https://hp-api.onrender.com/api/characters/house/gryffindor"
  //     );
  //     const modifiedData = response.data.splice(0, 10).filter((el) => {
  //       return el.name.includes(search);
  //     });
  //     setData(modifiedData);
  //   };

  //   fetchData();
  // }, [search]);

  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Hero />
          <Routes>
            <Route path="/" element={<div>test</div>}/>
            <Route path="/gryffindor" element={<Gryffindor/>}/>
            <Route path="/ravenclaw" element={<Ravenclaw/>}/>
            <Route path="/slytherin" element={<Slytherin/>}/>
            <Route path="/hufflepuff" element={<Hufflepuff/>}/>
          </Routes>
          {/* <input
            type="text"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          /> */}
          {/* Slytherin Gryffindor Hufflepuff Ravenclaw */}
        </div>
      </BrowserRouter>
  );
}

export default App;
