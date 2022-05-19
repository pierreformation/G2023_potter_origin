import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import axios from "axios";

const url = "http://hp-api.herokuapp.com/api/characters";

// const fetchData = async () => {
const response = axios.get(url);
// const response = await axios.get(url);
console.log("re", response);
// };
// fetchData();

function App() {
  const data = [
    {
      name: "harry",
      url: "https://images.rtl.fr/~c/770v513/rtl/www/1200629-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg",
    },
    {
      name: "hermione",
      url: "https://lespotiches.com/wp-content/uploads/2020/06/hermione-granger-portrait-flickr.jpg",
    },
    {
      name: "ron",
      url: "https://resize.programme-television.ladmedia.fr/r/650,406/img/var/premiere/storage/images/tele-7-jours/diapos-tv/harry-potter-ron-weasley-neville-londubat-que-sont-devenus-les-eleves-de-poudlard-photos-4634970/poudlard/95453998-1-fre-FR/Poudlard.jpg",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Hero />
      <Characters data={data} />
    </div>
  );
}

export default App;
