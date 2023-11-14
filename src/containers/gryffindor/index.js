import Characters from "../../components/Characters"
import { useEffect, useState } from "react"
import axios from "axios";
import gryf from "../../assets/gryf.png"

const Gryffindor = () =>{
    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");
    const [filteredData,setFilteredData] = useState("")


    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(
           "https://hp-api.onrender.com/api/characters/house/gryffindor"
          );
          const modifiedData = response.data.splice(0, 100)
          setData(modifiedData);
        };
    
        fetchData(search);
      }, []);

      useEffect(() => {
        if(data){
          const modifiedData = data.filter((el) => {
            return el.name.includes(search);
          });
          setFilteredData(modifiedData);
        } else {setFilteredData("")}
      }, [search]);



    return data !== null ? (
    <>
      <div>
        <img width="200px" src= {gryf}/>
      </div>
      RECHERCHE
      <input
        className="myinput"
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <Characters data={filteredData || data} />
    </>
    ) : <div>test</div>
}

export default Gryffindor