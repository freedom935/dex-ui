import React from 'react';
import CurrencyInput from './CurrencyInput';
import SwapButton from './SwapButton';

const TradeContainer = () => {
  const currencies = [
    { symbol: 'BNB', balance: '0', amount: '0.00' },
    { symbol: 'USDT', balance: '0', amount: '0.00' }
  ];

  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-52 bg-zinc-100 max-md:px-5 max-md:py-24">
      <section className="flex flex-col items-start max-w-full w-[638px]">
        <h1 className="text-5xl font-bold text-center text-black max-md:text-4xl">
          Trade
        </h1>
        <p className="text-xl text-center text-black">
          Not connected
        </p>
        <div className="flex flex-col self-stretch px-9 pb-12 mt-3.5 w-full text-3xl rounded-3xl bg-zinc-400 max-md:px-5 max-md:max-w-full">
          <h2 className="self-start text-center text-stone-700">
            swap
          </h2>
          {currencies.map((currency, index) => (
            <CurrencyInput
              key={index}
              symbol={currency.symbol}
              balance={currency.balance}
              amount={currency.amount}
            />
          ))}
          <p className="self-start mt-3.5 text-2xl text-center text-black">
            Slippeage Tolerance:
          </p>
          <SwapButton />
        </div>
      </section>
    </main>
  );
};

export default TradeContainer;