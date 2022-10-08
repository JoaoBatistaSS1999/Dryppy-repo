import React, { useState } from "react";
import clock from "../assets/images/clock.png";
import gear from "../assets/images/gear.png";
import swap from "../assets/images/swap.png";
function Trade() {
  const [swapVisibility, setSwapVisibility] = useState(true);

  return (
    <div className="w-full flex justify-center mt-3">
      <div className="max-w-screen-lg w-full flex flex-col gap-3 justify-center">
        <div className="flex justify-start gap-3">
          <button
            onClick={() => setSwapVisibility(true)}
            className={
              swapVisibility
                ? "bg-[#28CDC4] p-3 ml-48 text-white"
                : "bg-[#849199] p-3 ml-48"
            }
          >
            SWAP
          </button>
          <button
            onClick={() => setSwapVisibility(false)}
            className={
              swapVisibility
                ? "bg-[#849199] p-3"
                : "bg-[#28CDC4] text-white p-3"
            }
          >
            LIQUIDITY
          </button>
        </div>

        {swapVisibility ? (
          <div className="w-full flex justify-center p-3">
            <div className="flex flex-col items-start border-[3px] bg-[#0F262E] text-white border-[#20459E] rounded-[25px] w-[410px] p-5 pb-10">
              <h3 className="flex justify-between w-full mb-1 font-bold text-xl">
                Exchange
                <div className="flex gap-3">
                  <img src={gear} alt="gear" className="h-6" />
                  <img src={clock} alt="clock" className="h-6" />
                </div>
              </h3>
              <p className="text-[#28CDC4] mb-3 text-sm font-bold">
                Trade tokens in a instant
              </p>

              <p className="mb-5 font-bold">YOUR LIQUIDITY</p>

              <input
                type="number"
                min="0"
                className="flex w-full h-20 justify-center items-center rounded-[26px] text-start  bg-[#1D7171] px-10 py-5 focus:outline-none text-xl"
              />

              <div className="w-full my-3 flex justify-center">
                <img src={swap} alt="" className="h-7" />
              </div>

              <input
                type="number"
                min="0"
                className="flex w-full h-20 justify-start items-center mb-5 rounded-[26px] text-start  bg-[#1D7171] px-10 py-5 focus:outline-none text-xl"
              />

              <p className="text-[#82C2CD] font-bold text-sm mb-5">
                Don't see a pool you joined?{" "}
                <a className="text-[#96EBE4] cursor-pointer">IMPORT IT.</a>
              </p>

              <p className="text-sm font-bold">
                Or, if you staked your ICY tokens in a farm, unstake them to see
                them here.
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center p-3">
            <div className="flex flex-col items-start border-[3px] bg-[#0F262E] text-white border-[#20459E] rounded-[25px] w-[410px] p-5 pb-10">
              <h3 className="flex justify-between w-full mb-1 font-bold text-xl">
                Liquidity
                <div className="flex gap-3">
                  <img src={gear} alt="gear" className="h-6" />
                  <img src={clock} alt="clock" className="h-6" />
                </div>
              </h3>
              <p className="text-[#28CDC4] mb-3 text-sm">
                Add liquidity to receive LP tokens
              </p>

              <button className="flex justify-center items-center bg-gradient-to-r font-bold text-sm from-[#448DCD] to-[#27C9C0] bg-orange-200 px-8 py-2 mb-8 rounded-[27px]">
                ADD LIQUIDITY
              </button>

              <p className="mb-5 font-bold">YOUR LIQUIDITY</p>

              <div className="flex justify-center items-center mb-5 rounded-[26px] text-center  bg-[#1D7171] px-24 py-5">
                Connect to a wallet to view your liquidity
              </div>

              <p className="text-[#82C2CD] font-bold text-sm mb-5">
                Don't see a pool you joined?{" "}
                <a className="text-[#96EBE4] cursor-pointer">IMPORT IT.</a>
              </p>

              <p className="text-sm font-bold">
                Or, if you staked your ICY tokens in a farm, unstake them to see
                them here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Trade;
