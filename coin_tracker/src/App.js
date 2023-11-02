import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(1);
  const onChange = (event) => {
    setDollar(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((respone) => respone.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      <input value={dollar} onChange={onChange}></input>
      {!loading ? (
        <select>
          {coins.map((coin) => {
            return (
              <option key={coin.id}>
                {coin.name}({coin.symbol}) : {coin.quotes.USD.price / dollar}
              </option>
            );
          })}
        </select>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default App;
