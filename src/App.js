import './App.css';
import React, {useState, useEffect} from 'react';
import Homepage from './pages/Homepage';
import IdeaPortal from './contracts/IdeaPortal.json'
import { ethers } from 'ethers';
import ConnectWallet from './sections/ConnectWallet';
// import getWeb3 from './getWeb3';

const contractAddress = "0x053F5A2E2b66a213d5f22c3Cf578E31d501AE68b";
// const abi = contract.abi;

function App() {

  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract] = useState(null)

  const checkWalletIsConnected = () => { 
    const {ethereum} = window;
    if(ethereum){
      console.log("We are good to go!");
      
    }else{
        alert("Make sure you have metamask installed")
    }
  }



  const getContract = async () => {

    try{
      const {ethereum} = window;
      if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner();
        const _IdeaPortalContract = new ethers.Contract(contractAddress,IdeaPortal.abi, signer)
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
  }, [currentAccount])
  window.ethereum.on('accountsChanged', function (accounts) {
        setCurrentAccount(accounts[0]);
        console.log(accounts[0]);
    })

  return (
    <div className="App">
      <div>
        {currentAccount != null
        ? <Homepage value={{contract, currentAccount}} />
        : <ConnectWallet setCurrentAccount={setCurrentAccount} />
        }
      </div>
    </div>
  );
}

export default App;
