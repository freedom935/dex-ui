const App = () => {
  return (
    <>
      <div className="flex items-center h-screen justify-center">
        {/* tradeBox */}
        <div className="w-[500px] h-[400px] m-3 rounded-[10px] p-4 bg-slate-500 shadow-md">
          <div className="text-white font-bold"><h6>Easily Swap Tokens</h6>
            <div>Wallet is not connected</div>
          </div>
          {/* input fields */}
          <div>
            <p className="text-black absolute top-[305px] md:top-[325px] pl-1 cursor-pointer">balance: loading ...</p>
            <input className="w-full pl-3 rounded-md border-0 text-black py-8 mt-5" type="number" placeholder="0" />
            <input disabled className="w-full pl-3 rounded-md border-0 text-black py-8 mt-1 bg-white" value={'0.000'} type="number" placeholder="0" />
          </div>
          <div className="flex flex-row mt-2">
            <p className="text-white">Slippage Tolerance: </p>
            <label className="text-white">1%</label>
            {/* progress bar */}
            {/* swap button */}
          </div>
          <div className="w-full bg-amber-500 text-center mt-7 py-3 cursor-pointer text-white font-bold rounded-[25px]">Swap</div>
        </div>
      </div>
    </>
  )
}

export default App