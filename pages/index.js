import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import weather from "../public/Weather.png";
import nft from "../public/NFT.png";
import tracking from "../public/Tracking.png";
import Image from "next/image";
import pos from "../public/POS.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>Portfolio App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio website</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Hi, Im
            </h3>
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Aravind S
            </h2>
            {/* <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Blockchain Developer
            </h3> */}
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Scroll down to know more about me...
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="http://www.linkedin.com/in/aravind-srinivasan-088367291"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/Aravinds2511"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="mailto:aravindvasang@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p> */}
          </div>
          <div className="gap-10 max-w-lg">
            <div
              className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
              style={{ backgroundColor: "#666666" }}
            >
              <a
                href="https://nft-marketplace-61m7p6rcn-arvnds-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={nft} alt="" width={500} height={300} />
              </a>
              <h3 className="text-xl font-medium pt-8 pb-2 py-4 text-blue-300">
                <a
                  href="https://github.com/Aravinds2511/NFT_Marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NFT MARKETPLACE (code)
                  <p className="text-green-500">
                    --------------------------------
                  </p>
                </a>
              </h3>
              <p className="text-blue-100 py-2">
                Created an simple nft marketplace to create, sell and buy
                nfts...
              </p>
              {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4> */}
              <p className="text-blue-100 py-1">
                Solidity | Next.js | Hardhat | Pinata
              </p>
            </div>
            <div
              className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1"
              style={{ backgroundColor: "#666666" }}
            >
              <a
                href="https://github.com/Aravinds2511/proof_of_stack_blockchain_prototype"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={pos} alt="" width={600} height={300} />
              </a>
              <h3 className="text-xl font-medium pt-8 pb-2 py-4 text-blue-300">
                <a
                  href="https://github.com/Aravinds2511/proof_of_stack_blockchain_prototype"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PROOF-OF-STAKE(Prototype) (code)
                  <p className="text-green-500">
                    --------------------------------
                  </p>
                </a>
              </h3>
              <p className="text-blue-100 py-2">
                Created a simple blockchain that implements proof of stake.
              </p>
              {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4> */}
              <p className="text-blue-100 py-1">Python</p>
              <p className="text-blue-100 py-1">
                &#8226; P2P connection established
              </p>
              <p className="text-blue-100 py-1">
                &#8226; Implemeted Block validation, signature validation and
                POS consensus protocol
              </p>
              <p className="text-blue-100 py-1">
                &#8226; Has Api endpoints for blockchain state, info,
                transaction pool and transactions
              </p>
            </div>
            <div
              className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1"
              style={{ backgroundColor: "#666666" }}
            >
              <a
                href="https://web3-tracking-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={tracking} alt="" width={500} height={300} />
              </a>
              <h3 className="text-xl font-medium pt-8 pb-2 py-4 text-blue-300">
                <a
                  href="https://github.com/Aravinds2511/Web3_Tracking_App/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WEB3-TRACKING-APP (code)
                  <p className="text-green-500">
                    --------------------------------
                  </p>
                </a>
              </h3>
              <p className="text-blue-100 py-2">
                Created a tracking app using blockchain technology.
              </p>
              {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4> */}
              <p className="text-blue-100 py-1">Solidity | Next.js | Hardhat</p>
            </div>
            <div
              className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1"
              style={{ backgroundColor: "#666666" }}
            >
              <a
                href="https://weather-app-eosin-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={weather} alt="" width={500} height={250} />
              </a>
              <h3 className="text-xl font-medium pt-8 pb-2 py-4 text-blue-300">
                <a
                  href="https://github.com/Aravinds2511/Weather_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WEATHER APP (code)
                  <p className="text-green-500">
                    --------------------------------
                  </p>
                </a>
              </h3>
              <p className=" text-blue-100 py-2">
                Created a weather app that provides weather conditions,
                forecasts and suggestions.
              </p>
              {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4> */}
              <p className="text-blue-100 py-1">WEB 2 | React</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Certifications</h3>
            <div className="flex gap-10">
              <div
                className="text-center shadow-lg p-1 rounded-xl my-4  dark:bg-white flex-1 max-w-xs"
                style={{ backgroundColor: "#666666" }}
              >
                <h3 className="text-lg font-medium pt-2 pb-1 py-4 text-blue-100">
                  <a href="/bec.pdf" target="_blank" rel="noopener noreferrer">
                    BEC Vantage(2020)
                  </a>
                </h3>
              </div>
              <div
                className="text-center shadow-lg p-1 rounded-xl my-4  dark:bg-white flex-1 max-w-xs"
                style={{ backgroundColor: "#666666" }}
              >
                <h3 className="text-lg font-medium pt-2 pb-1 py-4 text-blue-100">
                  <a
                    href="https://simpli-web.app.link/e/I0KKZkO3kEb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blockchain Certification Training
                  </a>
                </h3>
              </div>
              <div
                className="text-center shadow-lg p-1 rounded-xl my-4  dark:bg-white flex-1 max-w-xs"
                style={{ backgroundColor: "#666666" }}
              >
                <h3 className="text-lg font-medium pt-2 pb-1 py-4 text-blue-100">
                  <a
                    href="https://dapp-world.com/course/certificate-verification/7990"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ethereum DApp Development
                  </a>
                </h3>
              </div>
            </div>
            <div className="flex gap-10">
              <div
                className="text-center shadow-lg p-1 rounded-xl my-4  dark:bg-white flex-1 max-w-xs"
                style={{ backgroundColor: "#666666" }}
              >
                <h3 className="text-lg font-medium pt-2 pb-1 py-4 text-blue-100">
                  <a
                    href="https://olympus.mygreatlearning.com/courses/13502/certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blockchain Basics
                  </a>
                </h3>
              </div>
              <div
                className="text-center shadow-lg p-1 rounded-xl my-4  dark:bg-white flex-1 max-w-xs"
                style={{ backgroundColor: "#666666" }}
              >
                <h3 className="text-lg font-medium pt-2 pb-1 py-4 text-blue-100">
                  <a
                    href="https://www.datacamp.com/statement-of-accomplishment/course/ce1e3c69b5602ffdb4f1c0a412164e551b568965?raw=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Python
                  </a>
                </h3>
              </div>
              <div
                className="text-center shadow-lg p-1 rounded-xl my-4  dark:bg-white flex-1 max-w-xs"
                style={{ backgroundColor: "#666666" }}
              >
                <h3 className="text-lg font-medium pt-2 pb-1 py-4 text-blue-100">
                  <a
                    href="https://www.datacamp.com/statement-of-accomplishment/course/5e559b833a8837abb849a289604b6c00814fc473?raw=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Intermediate SQL Queries
                  </a>
                </h3>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl mt-10 py-1 dark:text-white">
              Technologies
            </h3>
            <ul>
              <li>
                <h2 className="text-2xl mt-5 py-1 dark:text-white">
                  Languages:
                </h2>
                <p className="text-1xl py-1 dark:text-white">
                  &#8226; Solidity
                </p>
                <p className="text-1xl py-1 dark:text-white">
                  &#8226; Javascript
                </p>
                <p className="text-1xl py-1 dark:text-white">&#8226; Python</p>
                <p className="text-1xl py-1 dark:text-white">&#8226; C</p>
                <p className="text-1xl py-1 dark:text-white">&#8226; Sql</p>
              </li>
              <li>
                <h2 className="text-2xl mt-5 py-1 dark:text-white">
                  Frameworks:
                </h2>
                <p className="text-1xl py-1 dark:text-white">&#8226; Node js</p>
                <p className="text-1xl py-1 dark:text-white">&#8226; Web3 js</p>
                <p className="text-1xl py-1 dark:text-white">
                  &#8226; Ethers js
                </p>
                <p className="text-1xl py-1 dark:text-white">
                  &#8226; React js
                </p>
                <p className="text-1xl py-1 dark:text-white">&#8226; Next js</p>
              </li>
              <li>
                <h2 className="text-2xl mt-5 py-1 dark:text-white">Tools:</h2>
                <p className="text-1xl py-1 dark:text-white">&#8226; Foundry</p>
                <p className="text-1xl py-1 dark:text-white">&#8226; Hardhat</p>
                <p className="text-1xl py-1 dark:text-white">&#8226; Truffle</p>
                <p className="text-1xl py-1 dark:text-white">&#8226; Remix</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl mt-10 py-1 dark:text-white">About Me</h3>
            <p className="text-1xl py-1 dark:text-white">
              Hello there! My name is Aravind S, and I am passionate about
              exploring the exciting world of blockchain development. Currently,
              I am deeply engrossed in learning the intricacies of blockchain
              technology, fascinated by its potential to revolutionize various
              industries and create innovative solutions for real-world
              problems.. Solving puzzles, playing games, and exploring the pages
              of books are my favorite pastimes. I thrive on challenges and love
              honing my problem-solving skills. Apart from my tech interests, Im
              captivated by the intricacies of businesses and geopolitics.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
