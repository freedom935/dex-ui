import React from 'react'
import { CiWallet } from "react-icons/ci";
import { useAccount, useBalance  } from 'wagmi'
import { formatUnits } from 'viem'

const shortenAddress = (address: string, chars = 9) => {
  if (!address) return '';
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
};


const TradeBox = () => {
  const { isConnected, address } = useAccount();
  const { data } = useBalance({address: address},)
  return (
    <>
      <div className="flex items-center h-screen justify-center">
        {/* tradeBox */}
        <div className="w-[500px] h-[450px] m-3 rounded-[10px] p-4 bg-slate-500 shadow-md">
          <div className="text-white font-bold"><h6>Easily Swap Tokens</h6>
            <div>{isConnected ? shortenAddress(address) : 'Wallet is not connected'}</div>
          </div>
          {/* input fields */}
          <div className="relative mt-5">
            {/* TODO */}
            <p className='absolute top-0 ml-2 cursor-pointer'>balance: {(isConnected) && (data?.value) ? data?.value : '~0.0000'}</p>
            <p className="text-black mr-2 cursor-pointer absolute bottom-0 right-0"><CiWallet size={30} color="blue" /></p>
            <p className="text-black ml-2 cursor-pointer absolute bottom-0 left-0">~0.00000 USD</p>
            <input className="w-full pl-3 rounded-md border-0 text-black py-8 focus:outline-none text-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" placeholder="0" />
          </div>
          <div className="relative mt-3">
            <p className='absolute top-0 ml-2'>balance: ~0.000</p>
            <input disabled className="w-full pl-3 rounded-md border-0 text-black py-8 bg-white text-xl cursor-not-allowed" value={'0.000'} type="number" placeholder="0" />
            <p className="text-black mr-2 cursor-pointer absolute bottom-0 right-0"><CiWallet size={30} color="blue" /></p>
            <p className="text-black ml-2 cursor-pointer absolute bottom-0 left-0">min: ~0.00000 USD</p>
          </div>
          <div className="flex flex-row mt-2">
            <p className="text-white">Slippage Tolerance: </p>
            <label className="text-white">1%</label>
            {/* swap button */}
          </div>
          <div>
            <input type="range" className="w-full h-2 bg-gray-500 cursor-pointer" />
          </div>
          <div className="w-full bg-amber-500 text-center mt-12 py-3 cursor-pointer text-white font-bold rounded-[25px]">Swap</div>
        </div>
      </div>
    </>
  )
}

export default TradeBox