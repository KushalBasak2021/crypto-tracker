import React from "react";

const Coin = ({ data }) => {
  console.log(data);
  return (
    <div className="coins">
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr key={coin.id}>
              <td>
                <img src={coin.image} alt="coin logo" />
                <p>{coin.name}</p>
              </td>
              <td className="symbol">{coin.symbol}</td>
              <td>₹{coin.current_price}</td>
              {coin.price_change_percentage_24h < 0 ? (
                <td className="red">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
              ) : (
                <td className="green">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
              )}

              <td>₹{coin.total_volume}</td>
              <td>₹{coin.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coin;
