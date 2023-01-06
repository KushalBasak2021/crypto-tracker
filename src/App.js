import React, { useState, useEffect } from "react";
import "./App.css";
import Coin from "./components/Coin";

function App() {
  const [currencyData, setCurrencyData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    function getData() {
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
        .then((res) => res.json())
        .then((data) => {
          return setCurrencyData(data);
        });
    }
    getData();
    const interval = setInterval(() => getData(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchItem.toLowerCase())
    );
  };
  return (
    <div className="App">
      <h1>Search a Crypto</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <Coin data={search(currencyData)} />
    </div>
  );
}

export default App;
