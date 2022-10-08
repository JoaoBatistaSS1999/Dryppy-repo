import React from "react";
import ethFarm from "../assets/images/ethFarm.png";
import usdcFarm from "../assets/images/usdcFarm.png";

function Farms() {
  return (
    <div className="w-full flex justify-center mt-3">
      <div className="max-w-screen-lg w-full flex gap-3 pb-24 justify-around">
        <div className="flex flex-col text-white border-[3px] bg-[#0F262E] border-[#20459E] rounded-[25px] w-[410px] p-7">
          <h3 className="flex justify-between items-center mb-7">
            <img src={ethFarm} alt="farm_eth" className="w-20" />
            <p className="font-bold text-xl">ICY-ETH LP</p>
          </h3>
          <ul className="flex flex-col w-full gap-3 mb-5 font-bold">
            <li className="w-full flex justify-between py-1">
              <p>APR:</p> <p>Na%</p>
            </li>
            <li className="w-full flex justify-between py-1">
              <p>Earn:</p> <p>ICY</p>
            </li>
            <li className="w-full flex justify-between py-1">
              <p>Deposit Fee:</p> <p>Na%</p>
            </li>
            <li className="w-full flex justify-between py-1">
              <p>Harvest Lockup:</p> <p>6 days</p>
            </li>
          </ul>

          <p className="font-bold">
            ICY <span className="text-[#28CDC4]">EARNED</span>
          </p>

          <div className="flex justify-between mt-2">
            <p className="text-3xl font-bold">0</p>{" "}
            <button className="py-3 px-10 font-bold text-sm rounded-[24px] bg-[#363433]">
              HARVEST
            </button>
          </div>

          <p className="font-bold mt-5">
            ICY-ETH LP <span className="text-[#28CDC4] font-bold">STAKED</span>
          </p>

          <button className="flex mt-10 justify-center items-center bg-gradient-to-r font-bold text-sm from-[#448DCD] to-[#27C9C0] px-8 py-2 rounded-[27px]">
            UNLOCK WALLET
          </button>
        </div>

        <div className="flex flex-col text-white border-[3px] bg-[#0F262E] border-[#20459E] rounded-[25px] w-[410px] p-7">
          <h3 className="flex justify-between items-center mb-7">
            <img src={usdcFarm} alt="farm_eth" className="w-20" />
            <p className="font-bold text-xl">ICY-ETH LP</p>
          </h3>
          <ul className="flex flex-col w-full gap-3 mb-5 font-bold">
            <li className="w-full flex justify-between py-1">
              <p>APR:</p> <p>Na%</p>
            </li>
            <li className="w-full flex justify-between py-1">
              <p>Earn:</p> <p>ICY</p>
            </li>
            <li className="w-full flex justify-between py-1">
              <p>Deposit Fee:</p> <p>Na%</p>
            </li>
            <li className="w-full flex justify-between py-1">
              <p>Harvest Lockup:</p> <p>6 days</p>
            </li>
          </ul>

          <p className="font-bold">
            ICY <span className="text-[#28CDC4]">EARNED</span>
          </p>

          <div className="flex justify-between mt-2">
            <p className="text-3xl font-bold">0</p>{" "}
            <button className="py-3 px-10 font-bold text-sm rounded-[24px] bg-[#363433]">
              HARVEST
            </button>
          </div>

          <p className="font-bold mt-5">
            ICY-USDC LP <span className="text-[#28CDC4] font-bold">STAKED</span>
          </p>

          <button className="flex mt-10 justify-center items-center bg-gradient-to-r font-bold text-sm from-[#448DCD] to-[#27C9C0] px-8 py-2 rounded-[27px]">
            UNLOCK WALLET
          </button>
        </div>
      </div>
    </div>
  );
}

export default Farms;
