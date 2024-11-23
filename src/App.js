import {useEffect,useState} from "react"
import './App.css';
import Axios from "axios"
import Coin from "./Components/Coin";

function App() {

  const [listOfCoins,setListOfCoins]=useState([]);
  const [searchWord,setsearchWord]=useState("");

  //UseEffect is used so that it refreshes the page after every changes
  useEffect(()=>{
    //With the axios component we get the information the respective api
    Axios.get("https://api.coincap.io/v2/assets").then(
      (response)=>{
        //with setLidtof Coins state we display the data on the screen
        setListOfCoins(response.data.data)
      }
    )
  },[]);

  //With the help of list of coins useState we filter with 'filter' function
  const filteredCoins=listOfCoins.filter((data)=>{
    return data.name.toLowerCase().includes(searchWord.toLocaleLowerCase())
  })


  return (
    <div className="App">
      <div className="cryptoHeader">
        <input type="text" placeholder="Bitcoin..." onChange={(event)=>{setsearchWord(event.target.value)}}/>
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((data)=>{
          return <Coin //Passing the props received from the coin.js file 
          name={data.name} 
          price={data.priceUsd} 
          symbol={data.symbol}
          info={data.explorer}/>
        })}
      </div>
    </div>
  );
}

export default App;
