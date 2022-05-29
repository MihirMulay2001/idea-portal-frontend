import './App.css';
import React, {useState, useEffect, createContext} from 'react';
import Homepage from './pages/Homepage';
import IdeaPortal from './contracts/IdeaPortal.json'
import { ethers } from 'ethers';
// import getWeb3 from './getWeb3';

const contractAddress = "0xD8e96B835564FEd1a65D8115D7E7CB96df122A6b";
const ContractContext = createContext()
// const abi = contract.abi;

function App() {

  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract] = useState(null)

  const checkWalletIsConnected = () => { 
    const {ethereum} = window;
    if(!ethereum){
      alert("Make sure you have metamask installed")
    }else{
      console.log("We are good to go!");
    }
  }

  const connectWalletHandler = async () => {
      const {ethereum} = window;
      if(!ethereum){
        alert("Make sure you have metamask installed")
      }else{
        try{
          const accounts = await ethereum.request({method: 'eth_requestAccounts'})
          setCurrentAccount(accounts[0])
        }catch(error){
          console.log(error);
        }
      }
   }



  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const getContract = async () => {

    try{
      const {ethereum} = window;
      if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner();
        const _IdeaPortalContract = new ethers.Contract(contractAddress,IdeaPortal, signer)
      setContract(_IdeaPortalContract)  
      }else{
        console.log("Object doesn't exist");
      }
    }catch(e){
      console.log(e);
    }
    
  };

   useEffect(() => {
    checkWalletIsConnected();
    if(window.ethereum && currentAccount){
      getContract()
    }
  }, [])


  return (
    <div className="App">
      <div>
        {currentAccount != null
        ? <Homepage value={{contract, currentAccount}} />
        :connectWalletButton()
        }
      </div>
    </div>
  );
}

export default App;
