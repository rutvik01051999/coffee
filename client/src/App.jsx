import { useState, useEffect } from 'react'
import abi from "./contractJson/chai.json"
import { ethers } from "ethers"
import Memos from './components/Memos'
import Buy from './components/Layout'
import chai from "./chai.png";
import './App.css'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('Not connected');
  useEffect(() => {
    const template = async () => {

      const contractAddres = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const contractABI = abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try {

        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        })

        window.ethereum.on("accountsChanged", () => {
          window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer = provider.getSigner(); //write the blockchain

        provider.getBalance(contractAddres, "latest").then((balance) => {
          console.log("Balance:", ethers.utils.formatEther(balance));
        }).catch((error) => {
          console.error("Error fetching balance:", error);
        });

        console.log(provider)

        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
        setState({ provider, signer, contract });

      } catch (error) {
        console.log(error)
      }
    }
    template();
  }, [])
  return (
    <div >
      <Buy state={state} />
      <Memos state={state} />
    </div>
  )
}

export default App
