import React from "react";
import { IconCheckedCircle, IconCircle } from "../../iocns/Icons";
import Button from "../../shared/Button";

const roadmapItem = [
  {
    phase: "Phase 1",
    status: "Active",
    isStatus: true,
    heading: "Foundation Path",
    listItems: [
      {
        title: "Blueprint Release",
        checked: true,
      },
      {
        title: "Website Launch",
        checked: true,
      },
      {
        title: "Community Development",
        checked: true,
      },
      {
        title: "Smart Contract Development",
        checked: false,
      },
      {
        title: "Security and Audits",
        checked: false,
      },
      {
        title: "Presale Launch",
        checked: false,
      },
    ],
  },

  {
    phase: "Phase 2",
    status: "Upcoming",
    isStatus: false,
    heading: "Future Map",
    listItems: [
      {
        title: "Community Growth",
        checked: false,
      },
      {
        title: "Presale Expansion",
        checked: false,
      },
      {
        title: "Marketing Thrust",
        checked: false,
      },
      {
        title: "KOLs Engagement",
        checked: false,
      },
      {
        title: "Platform Development",
        checked: false,
      },
      {
        title: "Giveaway Launch",
        checked: false,
      },
    ],
  },
  {
    phase: "Phase 3",
    status: "Upcoming",
    isStatus: false,
    heading: "Success Chart",
    listItems: [
      {
        title: "Presale Conclusion",
        checked: false,
      },
      {
        title: "Platform Alpha Release",
        checked: false,
      },
      {
        title: "Token distribution",
        checked: false,
      },
      {
        title: "CMC and CG Listing",
        checked: false,
      },
      {
        title: "Initial DEX Listing",
        checked: false,
      },
      {
        title: "Experience the Tokenization",
        checked: false,
      },
    ],
  },
];
const Roadmap = () => {
  return (
    <div className="relative z-30" id="roadmap">
      <div className='roadmapBg absolute opacity-60'></div>
      <div className="px-5 sm:px-10 lg:px-20 py-24 lg:py-28 2xl:py-40">
        <h2 className="uppercase text-center max-lg:mb-12">Roadmap</h2>
        <div className="grid lg:grid-cols-3 gap-2 sm:gap-8 " data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
          {roadmapItem.map((file) => (
            <div className="px-6 sm:px-[48px] pt-[72px] pb-8 rounded-[48px] border border-gray shadow1 bg-white mx-auto flex-col justify-center relative mt-10 lg:mt-32 w-full">
              <div className="flex justify-between items-center px-8 py-4 sm:py-6   bg-dark-black text-white rounded-full -mt-24 sm:-mt-28">
                <p className="uppercase font-normal font-display pr-4 text-white max-sm:text-sm">
                  {file.phase}
                </p>
                <p
                  className={`${
                    file.isStatus ? "text-light-green" : "text-gray-dark"
                  }`}
                >
                  {file.status}
                  {file.isStatus && (
                    <span className="bg-light-green inline-block w-2.5 h-2.5 rounded-full ml-2"></span>
                  )}
                </p>
              </div>
              <div className="mt-7 text-center">
                <h3 className="max-sm:text-lg  max-lg:text-2xl tracking-normal text-dark-black leading-none font-normal">
                  {file.heading}
                </h3>
                <ul className="mt-4 sm:mt-6 max-lg:flex justify-center items-start gap-1 sm:gap-2 flex-wrap">
                  {file.listItems.map((item) => (
                    <li key={item.title} className="sm:pb-2 flex last:pb-0 max-lg:items-center">
                      {item.checked ? <IconCheckedCircle /> : <IconCircle />}
                      <p className="pl-2 max-sm:text-xs max-lg:text-base">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-16 flex justify-center" id="whitepaper">
          <Button
            variant="secondary"
            label="Whitepaper"
            icon="/img/Form.svg"
            alt="Money_fill"
            onClick={() => {}}
            position="end"
            className="uppercase font-display font-normal z-30 max-sm:w-full max-sm:text-sm"
          />
        </div>
      </div>

      <div className="px-5 sm:px-10 lg:px-20 py-12 sm:py-20" id="howtobuy">
        <h2 className="uppercase text-center">How to Buy</h2>
        <div className="grid lg:grid-cols-2  gap-8 ">
          <div className="px-6 lg:px-12 py-8 lg:py-16  rounded-3xl lg:rounded-[48px] border border-gray shadow1 mx-auto flex-col justify-center relative mt-16 w-full bg-dark-black text-white" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
            <h3 className="max-sm:text-lg max-lg:font-2xl tracking-normal  leading-none font-normal pb-6">
              Method 1: Signup
            </h3>
            <ul className="text-sm sm:text-base 2xl:text-2md font-medium list-disc pl-6">
              <li>
              Enter your first name, last name, phone number, email address, referral code (if any) or you can keep it blank, accept the terms and signup.
              </li>
              <li>Verify your email and your account is created</li>
              <li>Select the crypto through which you want to make the payment</li>
              <li>Select the correct network while selecting the crypto</li>
              <li>Enter USD amount, any bonus code and Click on purchase</li>
              <li>You will see a wallet address and additionally click on show QR code</li>
              <li>Go on to you Metamask/Trust wallet/ Coinbase wallet and paste the wallet address</li>
              <li>Enter the displayed amount and send it</li>
              <li>In a few minutes the transaction will be finished and you will get tokens updated in your dashboard.</li>
            </ul>
          </div>
          <div className="px-6 lg:px-12 py-8 lg:py-16 rounded-3xl lg:rounded-[48px] border border-gray shadow1 mx-auto flex-col justify-center relative mt-0 lg:mt-16 w-full bg-white text-dark-black" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000">
            <h3 className="max-sm:text-lg max-lg:font-2xl tracking-normal  leading-none font-normal pb-6">
              Method 2: Wallet Connect
            </h3>
            <ul className="text-sm sm:text-base 2xl:text-2md font-medium list-disc pl-6">
              <li>Click on wallet connect at top right</li>
              <li>Select metamask/trust wallet or use wallet connect option to scan</li>
              <li>Click on Buy token</li>
              <li>Select the crypto through which you want to make the payment</li>
              <li>Select the correct network while selecting the crypto</li>
              <li>Enter USD amount, any bonus code and Click on purchase</li>
              <li>You will see a wallet address and additionally click on show QR code</li>
              <li>Directly approve the transaction in your wallet OR manually send on the displayed wallet address</li>
              <li>Once approved transaction will be finished and you can see the purchase history</li>
              
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-16 flex justify-center">
        <Button
                label="PURCHASE PRESALE"
                icon="/img/Money_fill.svg"
                alt="Money_fill"
                onClick={() => {}}
                position="end"
                className="uppercase font-display font-normal z-30 max-sm:w-full max-sm:text-sm"
              />
        </div>
      </div>
      <div className='howwToBuyBg absolute bottom-[446px] left-0 right-0 opacity-60'></div>
    </div>
  );
};

export default Roadmap;
