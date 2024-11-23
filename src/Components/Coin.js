import React from 'react'

function Coin({name,price,symbol,info}) {
  return (
    //This acts as basic blueprint for how the data is to be distributed
    <div className='coin'>
      <h1>Name:{name}</h1>
      <h2>Price(in Usd):{price}</h2>
      <h2>Symbol:{symbol}</h2>
      <h3>URL:{info}</h3>
    </div>
  )
}

export default Coin
