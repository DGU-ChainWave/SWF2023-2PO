import {
  IntroSection,
  NFTSection,
  SubTitle,
  CarouselSection,
  CycleSection,
} from "./components";
import { OrangeTitle, Root, Title } from "./styled";
import handIcon from "../../assets/icon/fi-rr-hand-holding-heart.png";
import personHeartIcon from "../../assets/icon/fi-rr-following.png";
import voteIcon from "../../assets/icon/fi-rr-interactive.png";
import { contents as progressContents } from "../../utils/ProgressDetail";
import { contents as waitingContents } from "../../utils/WaitingDetail";
import behindContents from "../../utils/BehindDetailcontents";

import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import KryptoBirdz from "../../truffle_abis/KryptoBirdz.json";
import { useEffect, useState } from "react";

export const Home = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [kryptoBirdz, setKryptoBirdz] = useState([]);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      console.log("Ethereum wallet is connected");
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      console.log("Legacy web3 browser detected");
    } else {
      window.alert("No ethereum broswer detected! You can check out MetaMask!");
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3; // Use 'web3' instead of 'Web3' for the window object

    if (web3) {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      console.log(accounts[0]);

      const networkId = await web3.eth.net.getId();
      const networkData = KryptoBirdz.networks[networkId];
      console.log(networkData);

      if (networkData) {
        const abi = KryptoBirdz.abi;
        const address = networkData.address;
        const contract = new web3.eth.Contract(abi, address);
        setContract(contract);
        console.log(contract);

        // call the total supply of our NFTs
        const totalSupply = await contract.methods.totalSupply().call();
        setTotalSupply(totalSupply);

        for (let i = 0; i < totalSupply; i++) {
          const KryptoBirdz = await contract.methods.kryptoBirdz(i).call();
          console.log(KryptoBirdz);
          setKryptoBirdz((prevState) => [...prevState, KryptoBirdz]);
        }
      }
    } else {
      console.log(
        "Web3 object is undefined. Make sure the provider is properly initialized."
      );
    }
  };

  const mint = (to, tokenURI) => {
    contract.methods
      .mint(to, tokenURI)
      .send({ from: account })
      .once("receipt", (receipt) => {
        console.log(receipt);
        setKryptoBirdz((prevState) => [...prevState, tokenURI]);
      });
  };

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  useEffect(() => {
    console.log(kryptoBirdz);
  }, [kryptoBirdz]);

  return (
    <Root>
      <input
        type="submit"
        style={{
          fontSize: "20px",
          borderRadius: "20px",
          border: "1px solid orange",
          marginTop: "10px",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.preventDefault();
          mint("0x86948078a2bC9A367DE4c1E24E9E8573f09cF20b", "https...1");
        }}
        value="Mint"
      />
      <IntroSection />
      <CycleSection />
      <NFTSection />
      <Title>
        당신의&nbsp;<OrangeTitle>사랑</OrangeTitle>을 나눠주세요
      </Title>
      <SubTitle src={handIcon}>모금 중</SubTitle>
      <CarouselSection progress={progressContents} />
      <SubTitle src={voteIcon}>투표 중</SubTitle>
      <CarouselSection waiting={waitingContents} />
      <SubTitle src={personHeartIcon}>비하인드</SubTitle>
      <CarouselSection behind={behindContents} />
    </Root>
  );
};
