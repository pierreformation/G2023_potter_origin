import Characters from "../../components/Characters"
import { useEffect, useState } from "react"
import axios from "axios";

const Ravenclaw = () =>{
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(
           "https://hp-api.onrender.com/api/characters/house/ravenclaw"
          );
          const modifiedData = response.data.splice(0, 10)
          setData(modifiedData);
        };
    
        fetchData();
      }, []);

    return data !== null ? <Characters data={data} /> : <div>test</div>
}

export default Ravenclaw