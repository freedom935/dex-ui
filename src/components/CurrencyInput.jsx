import React from 'react';

const CurrencyInput = ({ symbol, balance, amount }) => {
  return (
    <div className="flex overflow-hidden relative items-start py-12 pr-4 pl-4 mt-6 leading-none text-black bg-white rounded-lg border border-solid border-zinc-300 font-[number:var(--sds-typography-body-font-weight-regular)] min-h-[112px] min-w-[240px] text-[length:var(--sds-typography-body-size-medium)] max-md:mr-1 max-md:max-w-full">
      <label htmlFor={`input-${symbol}`} className="sr-only">Enter amount for {symbol}</label>
      <input
        id={`input-${symbol}`}
        type="text"
        className="z-0 self-stretch my-auto text-[color:var(--sds-color-text-default-tertiary)]"
        placeholder="0"
        aria-label={`Enter amount for ${symbol}`}
      />
      <div className="absolute top-2 z-0 w-16 h-4 left-[7px]">
        balance:
      </div>
      <div className="absolute bottom-2 z-0 h-4 left-[7px] w-[49px]">
        $ {amount}
      </div>
      <div className="flex absolute bottom-6 z-0 shrink-0 h-16 bg-zinc-300 right-[11px] rounded-[57px] w-[167px]" />
      <div className="flex absolute top-2 z-0 shrink-0 bg-black rounded-full h-[88px] right-[121px] w-[95px]" />
      <div className="absolute z-0 h-4 text-center right-[58px] top-[46px] w-[33px]">
        {symbol}
      </div>
    </div>
  );
};

export default CurrencyInput;