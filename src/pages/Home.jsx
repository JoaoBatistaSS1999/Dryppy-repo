import React from "react";
import mascot from "../assets/images/mascotc.png";
import metamask from "../assets/images/metamask.png";
function Home() {
  return (
    <div className="w-full flex justify-center mt-3">
      <div className="max-w-screen-lg w-full flex gap-3 justify-center">
        <div className="w-[600px] flex flex-col justify-between border-[3px] px-10 py-5 bg-[#0F262E] text-white rounded-[25px] border-[#20459E] items-start">
          <div className="w-full flex justify-between">
            <div className="flex flex-col items-start py-3">
              <h3 className="font-bold text-xl mb-3">Farms & Staking</h3>

              <p className="text-[#69D9D3] mb-2 text-xs font-bold">
                $ICY to Harvest:
              </p>
              <p className="mb-4">LOCKED</p>

              <p className="text-[#69D9D3] mb-2 text-xs font-bold">
                $ICY in wallet:
              </p>
              <p>LOCKED</p>
            </div>

            <div>
              <img src={mascot} alt="mascot" className="w-60" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <button className="bg-gradient-to-r h-10 font-bold text-md from-[#468CC8] to-[#36C7C8] p-2 flex justify-center gap-3 rounded-[30px]">
              UNLOCK WALLET
            </button>
            <button className="bg-gradient-to-r h-10 font-bold text-md from-[#468CC8] to-[#36C7C8] p-2 flex justify-center gap-3 rounded-[30px]">
              <img src={metamask} alt="metamask" className="h-7" /> ADD TO
              METAMASK
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-[400px] border-[3px] px-10 py-5 bg-[#0F262E] text-white rounded-[25px] border-[#20459E] flex flex-col items-start">
            <h2 className="text-2xl font-bold">Farms & Staking</h2>
            <h3 className="font-bold text-3xl mt-3">$0.00</h3>
            <p className="text-[#69D9D3]">
              Across all Farms, Pools and Launchpads
            </p>
          </div>

          <div className="w-[400px] border-[3px] px-10 py-5 bg-[#0F262E] text-white rounded-[25px] border-[#20459E] flex flex-col items-start">
            <h3 className="text-xl font-bold">DRIP INU ($ICY) Stats</h3>

            <ul className="w-full flex flex-col mt-5 gap-2">
              <li className="flex justify-between w-full">
                <p>Market Cap</p>
                <p>0</p>
              </li>
              <li className="flex justify-between">
                <p>Total Minted</p>
                <p>0</p>
              </li>
              <li className="flex justify-between">
                <p>Circulating Supply</p>
                <p>0</p>
              </li>
              <li className="flex justify-between">
                <p>Max Tax Amount</p>
                <p>0</p>
              </li>
              <li className="flex justify-between">
                <p>Transfer Tax</p>
                <p>0</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
